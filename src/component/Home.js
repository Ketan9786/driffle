import * as React from 'react';
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="box">
        <div className='circle1' >      
          <div className="rotate-3-1" >    
            <div className="inner-r3-1">
            </div>
            <div className="inner-r3-2">
            </div>
            <div className="inner-r3-3">
            </div>
          </div>

          <div className='show'>   {/* Circle text area section  */}
            <h5>Driffle is a <span>one-stop shop</span> for all your gaming needs.</h5>
            <p>Not only do we sell games, but also offer gift cards, DLC's, and more. Driffle is a marketplace, so you can find a wide variety of items from different sellers in one place. We are committed to the future of gaming and strive to make our platform safe, affordable, and sustainable for all users. Whether you're looking for the latest releases
              or hard-to-find classics, you're sure to find what you're looking for on Driffle.</p>
            <button className='btn'>Visit our store</button>
          </div>

          <div className='circle2' >
            <div className="rotate-2-1" >
              <div className="inner-r2-1">
              </div>
              <div className="inner-r2-2">
              </div>
            </div>

            <div className='circle3' >
              <div className="rotate">
                <div className="inner">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}