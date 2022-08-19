import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react';
function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          
          
              <div className="col-md-3">
                <h1 className="logo">R.K ENGINEERING </h1>
                <div>
                <p className="footer-text">
                  An ISO 9001:2008 Certified Co.
                </p> 
                </div>
                <div>
                <p className="footer-text">
                  CRISIL Certified
                </p> 
                </div>  
              </div>
          
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  
                  <li>
                    <div><Link to="#" >+91-9888088884</Link></div>
                    
                    <div><Link to="#" >+91-9417800389</Link></div>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p className="footer-title">Manufacturer & Supplier OF</p>
                
                 <p className='footer-text'>
                 
                  PRECISION MACHINED COMPONENTS FOR TRACTORS, AUTOMOTIVE INDUSTRY, RAILWAYS, HARVESTER COMBINES,
EARTH MOVING EQUIPMENTS AND WIND MILL INDUSTRIES WITH EXCELLENT QUALITY.
</p> 
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
