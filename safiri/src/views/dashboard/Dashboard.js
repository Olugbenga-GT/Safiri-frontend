import React from 'react';
import classes from './Dashboard.module.css';
import DashboardCard from "./DashboardCard";


const Dashboard = () => {
    const data = [
        {
            amount: "1500",
            title: "Amount saved",
            color: {bgColor: "#DCEEF5", col: "#0692C4"}
        },
        {
            amount: "5000",
            title: "Budget",
            color: {bgColor: "#D8FAD2", col: "#1FC406"}
        },
        {
            amount: "800",
            title: "Attainable emergency fund",
            color: {bgColor: "#F7E4E4", col: "#C4060C"}
        }

    ]
    return (
        <>
           <header>
               <h2>Dashboard</h2>
               <div className="card-data">
                   {data.map((value, key) =>
                       <DashboardCard
                           key={key}
                           title={value.title}
                           amount={value.amount}
                           color={value.color}
                       />
                   )}
               </div>
           </header>
        </>
    );
};

export default Dashboard;