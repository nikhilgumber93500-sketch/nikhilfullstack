
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';

function FAQ(){
    return(
        <>
        <Container className="my-5">

        <h2 className="text-center mb-4">
          Frequently Asked Questions
        </h2>

        <Accordion>

          {/* FAQ 1 */}
          <Accordion.Item eventKey="0">

            <Accordion.Header>
              What services does Softech provide?
            </Accordion.Header>

            <Accordion.Body>
              Softech provides Web Development, App Development
              and UI / UX Design services.
            </Accordion.Body>

          </Accordion.Item>


          {/* FAQ 2 */}
          <Accordion.Item eventKey="1">

            <Accordion.Header>
              Which technologies do you use?
            </Accordion.Header>

            <Accordion.Body>
              We use HTML, CSS, JavaScript, React and
              other modern web technologies.
            </Accordion.Body>

          </Accordion.Item>


          {/* FAQ 3 */}
          <Accordion.Item eventKey="2">

            <Accordion.Header>
              How can I contact Softech?
            </Accordion.Header>

            <Accordion.Body>
              You can contact us through our Contact section
              for more information.
            </Accordion.Body>

          </Accordion.Item>

        </Accordion>

      </Container>

</>
    );
}
export default FAQ;