import './App.css';
import React from 'react';
import './Beans.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Ic = () =>{
    const cardInfo = [
        {
            image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcToMyssUgA7RjH4APTivVeVfxNcyRhEjY9jm83Dj9YU9fwZOctQoL5viS2ofYhxXd2xntdi4witdwLGbDVXJP6cNlVfbwkwT_AR9k8eTwQh9JDSCb_WUE2U&usqp=CAE",
            title:"Bru Instant Coffee Gold, 25Gm",
            text:"₹80.00",
        },

        {
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTiaYrgUC6LVliI9qu5y55I1LC0Amx1ddOqWk7eBZYArBgzvmOD-IOvI1cR9F3jqxwGvVSMg9bjt7DoVbOCPStSeUH-KbH0KwZiV9mM_PMWWqwErzVxq10Wig&usqp=CAE",
            title:"Rage Dark Chocolate Flavour Instant Coffee 50 g",
            text:"₹318.00",
        },

        {
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSHAL3a-8FLM29pGU1AVHkSRNVW3YMyB_rIMfk3vXpE1WgCvDaJxIvyPmuwMcnk5odCzNSw-gY0qWtPEC6El1pV5GBBYe1Djw&usqp=CAE",
            title:"Vanalaya Premium Classic Instant Coffee",
            text:"₹252.00",
        },

        {
            image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTG07hQPHTMzheepUkrmhBFbR8Tgq9cs6WB_JHuwpgdHVH6rFNjranjbSPzN11EpVV3yX-8zQpoPSCQMl0ZcCEApNNaDkB7QmXO7vRfp4wmFc1Ir9706djn_g&usqp=CAE",
            title:"Poko 100% Robusta Instant Coffee Powder",
            text:"₹250.00",
            
        },

        {
            image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRq6GUuS58gBtqDbvBDQS4yMK1J-Aa-JBRUWLH5dtE0EWn45gH2dQFhyh2xNdJWvFs680HquPvEFsliXEpP2ZrEoTvBQsYIY0GDNVvxUI7jV-pjric8rXoScw&usqp=CAE",
            title:"Cocoa Mint Instant Coffee-60g",
            text:"₹280.00",
        },
        
        {
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQyq0RKoo3Ljajvkfl5lc-mtXYaDWDGxpcq0b2ob8FkYDj92yQG8iVi18yl6A0nz8jiMXDO6jhtjeQTn7X6LQ1GlNVRJsHogIC7HfEcsGv8uG9ji-FH4u2z&usqp=CAE",
            title:"Purista Instant Coffee Instant Coffee",
            text:"₹220.00",
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

export default Ic