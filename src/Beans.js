import './App.css';
import React from 'react';
import './Beans.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const Beans = () =>{
    const cardInfo = [
        {
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSM581N3gotz4anClv3EI7M5p6WyY3tL9A-gHtYLRtP-_4l8a1wr7sObDA5oOmZpfa_Ptl4eLsBtoAUdRm0DmIIllIEaKk2L3cWgKd0fMlm&usqp=CAE",
            title:"Chariot New York Arabica Coffee",
            text:"₹133.00",
        },

        {
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHw455-G4Aff-GIQy1AYl3dg8lA53pQIUq_WQhR25ZLQvltns2MHVJ6LRgXR5n5lNvmfvYHqTJTCqBUe0kIfpMyjYnZelJHmbi4qG0Ze3kWBL35OrYaJI3dg&usqp=CAE",
            title:"Roasted Coffee Beans - 100% Premium Arabica 500g",
            text:"₹700.00",
        },

        {
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQchynPSQInWoEpNbMiEkWoivmDrV-CZqitPHGwMqrfbybpQO7DqO3r6IxWo4QSbYEOYP0Gwm2s-_pEioAZyrDZ3jyqp82Xh3wqa9cGHdo&usqp=CAE",
            title:"Alchemist Coffee Fire 320 / Whole Beans",
            text:"₹450.00",
        },

        {
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTzfgCmJWTvU5-dCgbYY_adi8nB5twlSmUxiXiBns9uv1aVtpTHEyH12PWIk0IrFLP-3lSRh6vjx3H6C6OlYip2yD-Z3ymILn_MAFBNPfluHVSlTc6qd6LjQw&usqp=CAE",
            title:"Alchemist Coffee Fire 320 / Whole Beans",
            text:"₹450.00",
        },

        {
            image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTpJM2zvHsngfUo2CKX8RnK4RYEOXfYlcn8dalKRGqvun0Edx7KhqI4UK4TSf2e8fpOeVtcV91ldZcPlH6vhPURDUjxg93xp_SE1HRNCMjIrslbD0mpqaLEEw&usqp=CAE",
            title:"Ethiopia Natural 12oz / Whole Bean",
            text:"₹1,144.58",
        },
        
        {
            image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSUm-RRswp6RynNKSPcdf1jnzQZd2olA-IJaNCn7kLE4A9QeIVsiLKgs2-UtLWFcqTXxHUFp3WMrhS7yBNz87m11LYQndT3UYDs79pDl1HCjW0BrbPj2Dbttg&usqp=CAE",
            title:"Sunbean Red Honey Coffee 100G",
            text:"₹150.00",
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

export default Beans