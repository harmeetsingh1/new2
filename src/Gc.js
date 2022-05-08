import './App.css';
import React from 'react';
import './Beans.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Gc = () =>{
    const cardInfo = [
        {
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQog4idQ7HBlWCxGpJFLKMhOYDN4kNxo_vVzajoVkM0iW8iMJoD-I1bkatR9-K_ckA6ae1Bfh5mwlEG7keLXF0nCKiYL5mrmSXlDdreL-RP_014hcGIHkLDyw&usqp=CAE",
            title:"Camden Blend - (Dark Roast) - 250g Ground Coffee 250g",
            text:"₹369.00",
        },

        {
            image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTZE63Ektc9ohDjNUIdm4ajKbjw3XF7YNckhcbrRJWoryX4lJo8oe9M_h-ZSbGWa2qDkORP7rJKvZwxmz2gEhhj2sI0EUjeZ-BI_WSaGsQ&usqp=CAE",
            title:"Baarbara Berry Premium Blend Ground Coffee",
            text:"₹240.00",
        },

        {
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTThKgIgMdCDLKJuLu8VymOfvBLQk9wQdiXm7xl6oy0e6sGO4CPFyPx7taa2R_5cuYGyOgJPbpbE-_3ZCuTfvCJLfKV5pkC-Qiujrmhmf-dHTUygLSy9RxR3g&usqp=CAE",
            title:"Slay X Robusta Ground & Freshly Roasted Coffee - 250 g",
            text:"₹350.00",
        },

        {
            image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSfwUVUaC1ONEOBYs-EgujkaSoetQTLuKsoypGO5ZyqcS2r9hkoSLAduHL5Q5x4_y3baILobhlO0QhtWmxEs5rAXOSFJAZrcFgyaVCCyWM&usqp=CAE",
            title:"Home Blend Ground Coffee 250 grams / French Press",
            text:"₹450.00",
        },

        {
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT-lNQLqOFTYQefPG46Ax9L20JEz_6lyXfEdzGhGBM2JzccHsJ0Zb9EVUmnThUC7M8YhYqXQWx01og2J2EuY_9UZ9DJvU-fRXC9AU5Y55UmX2ajyUyTAb3U&usqp=CAE",
            title:"Blueberry Muffin Flavored Ground Coffee",
            text:"₹1,410.00",
        },
        
        {
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5qtZVrWyxAhfrGEqbmpiW2Q8aXiyTMsf7UKp-svUT8KAJwiaGpB20oPa45T19syrMpy8c6dl-NSk9g6tt_mTeU-gAWJdvXc9ig8ftva2sEpRV36kTkyBrwA&usqp=CAE",
            title:"Rage Coffee Soul Blend Coffee Powder - 100% Arabica Beans",
            text:"₹599.00",
        },

       
    ];

    const renderCard = (card, index) => {
        return (
         <div className="bh">
          
         <Card style={{ width: "18rem"}} key={index} className="box">
            <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card.Body>
          </Card>
          </div>
          
        );
      };
    
      return <div className="grid">{cardInfo.map(renderCard)}</div>;
}

export default Gc