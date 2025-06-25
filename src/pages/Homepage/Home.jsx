import React from "react";
import "./home.css"
import Footer from "../../components/Layout/Footeer";

export default function Home() {
  return (
    <div className="Home">
      <div className="Home-page">
        <h1>Manage your finance with Zingo Tracker</h1>
        <p>
          Take control of your money effortlessly with Zingo Tracker. Track your
          expenses, set budgets, and monitor your financial goals in one place.
          Simplify your financial journey and build better habits with a tool to
          keep you on track every step of the way.
        </p>
        <button className="Login">Login</button>
        <button className="Register">Register</button>
      </div>
      <Footer/>
      
    </div>
    
  );
}
