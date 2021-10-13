import React from 'react'
import { Button } from '../Button'
import "../Footer.css";
import '../../App.css'
import '../pages/MarketPage.css'
//import history from './../pages/history';
import { useHistory } from "react-router-dom";

function MarketPage() {
  let history = useHistory();
  const handleNavigation = () => {
    history.push('/Products');
  };
    return (
        <div>
            <section className="firstform">
            <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button variant="btn btn-success" onClick={handleNavigation}>Subscribe</Button>
            
          </form>

            </section>




        </div>
    )
}

export default MarketPage





