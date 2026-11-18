import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Product(){
return(
<>
<Container className="my-5">

        <h2 className="text-center mb-4">
          Our Services
        </h2>

        <CardGroup>

          {/* Web Development */}
          <Card>

            <Card.Img
              variant="top"
              src="/card1.jpg"
              style={{
                height: "220px",
                objectFit: "cover"
              }}
            />

            <Card.Body>

              <Card.Title>
                Web Development
              </Card.Title>

              <Card.Text>
                We create modern and responsive websites
                using HTML, CSS, JavaScript and React.
              </Card.Text>

              <Button variant="primary">
                Read More
              </Button>

            </Card.Body>

            <Card.Footer>
              <small className="text-muted">
                Web Development
              </small>
            </Card.Footer>

          </Card>


          {/* App Development */}
          <Card>

            <Card.Img
              variant="top"
              src="/card2.png"
              style={{
                height: "220px",
                objectFit: "cover"
              }}
            />

            <Card.Body>

              <Card.Title>
                App Development
              </Card.Title>

              <Card.Text>
                Build powerful and user-friendly applications
                with modern technologies.
              </Card.Text>

              <Button variant="success">
                Read More
              </Button>

            </Card.Body>

            <Card.Footer>
              <small className="text-muted">
                App Development
              </small>
            </Card.Footer>

          </Card>


          {/* UI / UX Design */}
          <Card>

            <Card.Img
              variant="top"
              src="/card3.jpg"
              style={{
                height: "220px",
                objectFit: "cover"
              }}
            />

            <Card.Body>

              <Card.Title>
                UI / UX Design
              </Card.Title>

              <Card.Text>
                Create beautiful, simple and user-friendly
                designs for websites and applications.
              </Card.Text>

              <Button variant="warning">
                Read More
              </Button>

            </Card.Body>

            <Card.Footer>
              <small className="text-muted">
                UI / UX Design
              </small>
            </Card.Footer>

          </Card>

        </CardGroup>

      </Container>
</>
);
}
export default Product;
