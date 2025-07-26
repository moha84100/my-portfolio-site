import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import './EbookDetail.css';

const EbookDetail = () => {
    const [loading, setLoading] = useState(false);

    const ebook = {
        title: "10 projets web concrets expliqués pas à pas",
        author: "Par Mohamed Ech-Chkoubi",
        description: "Boostez votre portfolio avec 10 projets réels et demandés sur le marché. Chaque projet est détaillé de A à Z, du concept au déploiement, avec des explications claires et du code source accessible.",
        price: "24.99",
        features: [
            "Apprenez par la pratique avec des cas concrets.",
            "Code source complet pour chaque projet.",
            "Instructions de déploiement incluses.",
            "Idéal pour les développeurs juniors et intermédiaires."
        ]
    };

    const handlePurchase = async () => {
        setLoading(true);
        try {
            const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
            const response = await axios.post('https://my-portfolio-site-vj11.onrender.com/api/create-checkout-session', {
                ebookTitle: ebook.title,
            });

            const session = response.data;

            const result = await stripe.redirectToCheckout({
                sessionId: session.id,
            });

            if (result.error) {
                console.error(result.error.message);
                setLoading(false);
            }
        } catch (error) {
            console.error("Erreur lors de l'initialisation du paiement:", error);
            setLoading(false);
        }
    };

    return (
        <div className="ebook-detail-container-new">
            <div className="ebook-info-container-new">
                <h1 className="ebook-title-new">{ebook.title}</h1>
                <p className="ebook-author-new">{ebook.author}</p>
                <p className="ebook-description-new">{ebook.description}</p>
                <ul className="ebook-features-new">
                    {ebook.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="purchase-section-new">
                    <p className="ebook-price-new">{ebook.price} €</p>
                    <button onClick={handlePurchase} className="purchase-button-new" disabled={loading}>
                        {loading ? 'Chargement...' : 'Acheter maintenant'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EbookDetail;