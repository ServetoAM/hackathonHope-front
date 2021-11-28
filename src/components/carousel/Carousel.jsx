import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default () => (
  <Carousel autoPlay>
      <div className='carousel-img'>
        <img alt="" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <p className="legend">Legend 1</p>
      </div>
      <div className='carousel-img'>
        <img alt="" src="https://images.unsplash.com/photo-1598550487031-0898b4852123?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <p className="legend">Legend 2</p>
      </div>
  </Carousel>
);
