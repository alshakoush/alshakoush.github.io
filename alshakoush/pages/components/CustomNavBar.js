import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

export default function CustomNavBar () {
    return (
        <>
        <Navbar bg="light" variant="light">
            <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src="/logo.png"
                width="280"
                height="120"
                className="d-inline-block align-top"
                />{' '}
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="me-auto">
                <Link href='/contact'>
                    <a className='nav-link'>Neem Contact Op</a>
                </Link>
            </Nav> */}
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}