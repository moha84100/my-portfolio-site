import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css';

function BackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigue vers la page précédente dans l'historique
  };

  return (
    <button onClick={handleGoBack} className="back-button btn btn-secondary">
      <FontAwesomeIcon icon={faArrowLeft} className="me-2" /> Retour
    </button>
  );
}

export default BackButton;
