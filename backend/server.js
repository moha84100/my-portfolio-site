require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

// Middleware for Stripe webhooks (must be before express.json() for raw body)
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
        console.error(`Webhook Error: ${err.message}`);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
            const session = event.data.object;
            console.log('Checkout Session Completed:', session);

            const customerEmail = session.customer_details.email;
            const customerName = session.customer_details.name || 'Client';
            const amountTotal = session.amount_total / 100; // Convert from cents to currency
            const currency = session.currency.toUpperCase();

            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            // 1. Send notification email to you (Mohamed)
            try {
                await transporter.sendMail({
                    from: `"Stripe Notification" <${process.env.EMAIL_USER}>`,
                    to: process.env.EMAIL_USER, // Your email address
                    subject: `Nouvel achat d'e-book : ${customerName}`,
                    html: `<p>Bonjour Mohamed,</p>
                           <p>Un nouvel achat d'e-book a été effectué :</p>
                           <ul>
                               <li><strong>Client:</strong> ${customerName} (${customerEmail})</li>
                               <li><strong>Montant:</strong> ${amountTotal} ${currency}</li>
                               <li><strong>Session ID:</strong> ${session.id}</li>
                           </ul>
                           <p>Veuillez envoyer l'e-book "Maîtriser l'IA au Quotidien" à ${customerEmail}.</p>`,
                });
                console.log(`Notification email sent to ${process.env.EMAIL_USER}`);
            } catch (emailError) {
                console.error("Error sending notification email:", emailError);
            }

            // 2. Send confirmation email to the customer
            if (customerEmail) {
                try {
                    await transporter.sendMail({
                        from: `"Mohamed Ech-Chkoubi" <${process.env.EMAIL_USER}>`,
                        to: customerEmail,
                        subject: "Votre e-book : À la Conquête du Prompt Engineering",
                        html: `<p>Bonjour ${customerName},</p>
                               <p>Merci pour votre achat de l'e-book "À la Conquête du Prompt Engineering : DOMPTEZ L’INTELLIGENCE ARTIFICIELLE PAR LA MAITRISE DU LANGAGE".</p>
                               <p>Votre paiement de ${amountTotal} ${currency} a été traité avec succès.</p>
                               <p>Vous pouvez télécharger votre e-book ici : <a href="https://my-portfolio-site-vj11.onrender.com/ebooks/ebookiaprompt.pdf">Télécharger votre e-book</a></p>
                               <p>N'hésitez pas si vous avez des questions.</p>
                               <p>Cordialement,</p>
                               <p>Mohamed Ech-Chkoubi</p>`,
                    });
                    console.log(`Confirmation email sent to ${customerEmail}`);
                } catch (emailError) {
                    console.error("Error sending customer confirmation email:", emailError);
                }
            } else {
                console.warn("Customer email not found for checkout session.", session);
            }
            break;
        // Add other event types if needed
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    res.json({ received: true });
});

app.use(cors({
  origin: "https://moha84100.github.io", // ton site frontend GitHub Pages
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.send('Backend server is running!');
});

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // or your SMTP host
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER, // your email address
            pass: process.env.EMAIL_PASS, // your email password or app password
        },
    });

    try {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: process.env.EMAIL_USER, // list of receivers (your email address)
            subject: "Nouveau message de votre portfolio", // Subject line
            html: `<p>Vous avez reçu un nouveau message de votre formulaire de contact :</p>
                   <p><strong>Nom:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ message: "Message envoyé avec succès !" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Erreur lors de l'envoi du message." });
    }
});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-checkout-session', async (req, res) => {
    const { ebookTitle, ebookPrice } = req.body;

    try {
        console.log('Début de la création de la session Stripe...');
    const startTime = Date.now();
    const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: ebookTitle,
                        },
                        unit_amount: Math.round(ebookPrice * 100), // price in cents, rounded to avoid float issues
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `https://moha84100.github.io/my-portfolio-site/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `https://moha84100.github.io/my-portfolio-site/cancel`,
        });

        const endTime = Date.now();
    console.log(`Fin de la création de la session Stripe. Durée: ${endTime - startTime}ms`);
    res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ message: "Erreur lors de la création de la session de paiement." });
    }
});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

app.post('/api/create-checkout-session', async (req, res) => {
    const { ebookTitle } = req.body;
    let ebookPrice;
    let ebookImageUrl;

    // Définir le prix et l'image en fonction du titre de l'ebook
    if (ebookTitle === "À la Conquête du Prompt Engineering : Domptez l’Intelligence Artificielle par la Maîtrise du Langage") {
        ebookPrice = 14.99;
        ebookImageUrl = 'https://my-portfolio-site-vj11.onrender.com/ebooks/ebookiaprompt.png';
    } else if (ebookTitle === "10 projets web concrets expliqués pas à pas") {
        ebookPrice = 24.99;
        ebookImageUrl = 'https://my-portfolio-site-vj11.onrender.com/ebooks/10_projets_web_concrets.png';
    } else {
        return res.status(400).json({ error: 'Ebook non reconnu.' });
    }

    const lineItems = [
        {
            price_data: {
                currency: 'eur',
                product_data: {
                    name: ebookTitle,
                    images: [ebookImageUrl],
                },
                unit_amount: Math.round(ebookPrice * 100), // Convertir en centimes
            },
            quantity: 1,
        },
    ];

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `${process.env.FRONTEND_URL}/paymentsuccess`,
            cancel_url: `${process.env.FRONTEND_URL}/prestation/ebook`, // Redirect back to the ebook page on cancellation
        });
        res.json({ id: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error.message);
        console.error("Stripe error details:", error.raw || error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
