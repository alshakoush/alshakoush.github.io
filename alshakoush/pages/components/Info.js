import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Info () {
    return (
        <div>
        <Container>
        <br/>
        <Card>
            <Card.Header>Info</Card.Header>
            <ListGroup>
                <ListGroup.Item>
                    <b>BTW nummer</b> : NL002515242B76
                </ListGroup.Item>
                <ListGroup.Item>
                    <b>Adres</b> : Rinzemastraat 38, 8501LP, Joure
                </ListGroup.Item>
                <ListGroup.Item>
                    <b>Email</b> : info@alshakoush.nl
                </ListGroup.Item>
            </ListGroup>
        </Card>
        </Container>
        <br/>
        </div>
    );
}