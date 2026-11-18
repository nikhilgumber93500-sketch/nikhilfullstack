
import Carousel from 'react-bootstrap/Carousel';

 function Slider()
 {
    return(
        <>
    <Carousel className="mt-8">

        {/* Slide 1 */}
        <Carousel.Item interval={2000}>

          <img
            src="/slider1.webp"
            alt="First slide"
            style={{
              width: '100%',
              height: '600px',
              objectFit: 'cover'
            }}
          />

          <Carousel.Caption>
            <h3>First Slide</h3>
            <p>Welcome to Softech</p>
          </Carousel.Caption>

        </Carousel.Item>


        {/* Slide 2 */}
        <Carousel.Item interval={2000}>

          <img
            src="/slider2.jpg"
            alt="Second slide"
            style={{
              width: '100%',
              height: '600px',
              objectFit: 'cover'
            }}
          />

          <Carousel.Caption>
            <h3>Second Slide</h3>
            <p>Learn Web Development</p>
          </Carousel.Caption>

        </Carousel.Item>


        {/* Slide 3 */}
        <Carousel.Item interval={2000}>

          <img
            src="/slider3.png"
            alt="Third slide"
            style={{
              width: '100%',
              height: '600px',
              objectFit: 'cover'
            }}
          />

          <Carousel.Caption>
            <h3>Third Slide</h3>
            <p>We provide amazing services.</p>
          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>
</>)
 }
 export default Slider;