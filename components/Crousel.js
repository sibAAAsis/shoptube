import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Crousel = () => {
  return (
            <div>
              <Carousel>
                  <div>
                      <img src="images/1.webp" alt="image1"/>
                  </div>
                  <div>
                      <img src="images/5.webp" alt="image2" />
                  </div>
                  <div>
                      <img src="images/c1.jpeg" alt="image3"/>
                  </div>
                  <div>
                      <img src="images/1.webp" alt="image4"/>
                  </div>
                  <div>
                      <img src="images/5.webp" alt="image5"/>
                  </div>
              </Carousel>
            </div>
  )
}

export default Crousel
