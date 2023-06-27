import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Button, Text, Flex, Spacer } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Box className="error-area">
        <Flex align="center">
          <Box className="d-table">
            <Box className="d-table-cell">
              <Box className="container">
                <Box className="error-content">
                  <Heading as="h1" size="xl">
                    Website
                  </Heading>
                  <Heading as="h2" size="md">
                    Student Independen Kampus Merdeka
                  </Heading>
                  <Button
                    as={Link}
                    to="/student"
                    colorScheme="blue"
                    mt={4}
                    data-testid="student-btn"
                  >
                    All Student
                  </Button>
                  <Text mt={2}>by: RUANGGURU</Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Spacer />
        </Flex>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
