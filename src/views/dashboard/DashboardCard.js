import React from 'react';

const DashboardCard = ({amount, title, color}) => {

    const cardStyle =  {
        backgroundColor: color.bgColor,
        color: color.col,
        width: "200px",
        display: "grid",
        placeItems: "center"
    };

    return (
        <div style={cardStyle}>
            <h2>${amount}</h2>
            <p style={{color: "black"}}>{title}</p>
        </div>
    );
};

export default DashboardCard;