import React from "react";
import './Home.css';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image'

function Home() {
    return(
        <>
         <div className="space">
            <div class="banner">
               <div class="content">
                  <h1 class="mb-5">" An Authentic Place <br/>To Buy Coffee "</h1>
        {/* <a routerLink="menu">ORDER NOW <i class="bi bi-arrow-right"></i></a> */}
                </div>
              </div>
        </div>

         <div className="Quote">
             <h2>"Today's Good Mood Is Sponsored by coffee"</h2>
         </div>
        
        </>
    )
}

export default Home