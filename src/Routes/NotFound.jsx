import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const NotFound = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <>
      <div className="error-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="error-content">
                <h1>404 | Not Found</h1>
                <h2>Student Independen Kampus Merdeka</h2>
                <Button
                  onClick={goBack}
                  data-testid="back"
                  className="button"
                  id="btn"
                >
                  Back
                </Button>
                <br />
                <Link to="/" data-testid="home-page">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
