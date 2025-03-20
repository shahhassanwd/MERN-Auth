import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-5">
      <Container className="d-flex justify-content-center">
        <Card className="p-5 d-flex flex-column align-items-center hero-card bg-light w-75">
          <h1 className="text-center mb-4">MERN Authentication</h1>
          <p className="text-center mb-4">
            If you have an account, please sign in. Otherwise, sign up.
          </p>
          <div className="d-flex">
            <Button as={Link} to="/login" variant="primary" className="me-3">
              Sign In
            </Button>
            <Button as={Link} to="/register" variant="secondary">
              Sign Up
            </Button>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Hero;
