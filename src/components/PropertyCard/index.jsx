import React from 'react';
import "./propertycard.css";

const PropertyCard = ({ service }) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={service.iconUrl} alt={service.heading} className="card-icon" />
                <h2 className="card-heading">{service.heading}</h2>
            </div>
            <p className="card-description">{service.description}</p>
        </div>
    );
};

export default PropertyCard;
