import { Carousel } from "react-bootstrap";
import logo from '../../Assets/dunderMifflinLogo.png';
import image_one from '../../Assets/CarouselImage1.png';
import image_two from '../../Assets/CarouselImage2.png';
import image_three from '../../Assets/CarouselImage3.png';

function CarouselComponent() {
    return (
      <div style={{ width: '100%', maxWidth: '888px', height: '500px', borderRadius: '20px' }}>
        <Carousel style={{ height: 'auto' }}>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={image_one}
              alt="Image One"
              style={{ borderRadius: '20px', objectFit: 'contain' }}
            />
            <Carousel.Caption style={{
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              margin: 0,
              padding: 0
            }}>
              <div style={{ 
                width: '100%', 
                background: "rgba(0,0,0,0.7)", 
                padding: '20px', 
                margin: 0, 
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
              }}>
                <h3>Meet our lovely employees!</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={image_two}
              alt="Image Two"
              style={{ borderRadius: '20px', objectFit: 'contain' }}
            />
            <Carousel.Caption style={{
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              margin: 0,
              padding: 0
            }}>
              <div style={{ 
                width: '100%', 
                background: "rgba(0,0,0,0.7)", 
                padding: '20px', 
                margin: 0, 
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
              }}>
                <h3>Check out our documentary!</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={image_three}
              alt="Image Three"
              style={{ borderRadius: '20px', objectFit: 'contain' }}
            />
            <Carousel.Caption style={{
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              right: 0, 
              margin: 0,
              padding: 0
            }}>
              <div style={{ 
                width: '100%', 
                background: "rgba(0,0,0,0.7)",
                padding: '20px',
                margin: 0, 
                borderBottomLeftRadius: '20px',
                borderBottomRightRadius: '20px'
              }}>
                <h3>Want to Contact Us?</h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}

export default CarouselComponent;