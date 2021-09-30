import React from 'react';

const DashboardCard = ({amount, title, color, icon}) => {

    const cardStyle =  {
        backgroundColor: color.bgColor,
        color: color.col,
        width: "200px",
        display: "grid",
        placeItems: "center"
    };

    return (
        <div style={cardStyle}>
            { icon && <img src={icon} alt="icon"/>}
            {amount &&  <h2>${amount}</h2>}
            { title &&  <p style={{color: "black"}}>{title}</p>}
        </div>
    );
};

export default DashboardCard;