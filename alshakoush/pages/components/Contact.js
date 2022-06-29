import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

export default function Contact () {
    return(
        <Container>
        <Form action="mailto:me@alshakoush.com" method="POST" enctype="multipart/form-data" name="EmailForm">
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email adres</Form.Label>
            <Form.Control type="email" placeholder="Uw Emailadres" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="bericht">
        <Form.Label>Uw Bericht</Form.Label>
        <Form.Control as="textarea" rows={10} />
        </Form.Group>

        <Form.Group controlId="files" className="mb-3">
        <Form.Label>Bestanden/Fotos</Form.Label>
        <Form.Control type="file" multiple />
         </Form.Group>

        <Button className='mt-3' variant="primary" type="submit">
            Verzenden
        </Button>
        </Form>
        </Container>
    )
}