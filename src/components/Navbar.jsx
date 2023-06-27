import { Link } from "react-router-dom";
import { Box, Heading, Link as ChakraLink } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav>
      <Box id="nav-left">
        <ChakraLink
          as={Link}
          to="/"
          className="navbar-brand"
          data-testid="home-page"
        >
          <Heading as="h1" size="lg">
            Student Portal
          </Heading>
        </ChakraLink>
      </Box>
      <Box id="nav-right">
        <ChakraLink as={Link} to="/student" data-testid="student-page">
          All Student
        </ChakraLink>
        <ChakraLink as={Link} to="/add" data-testid="add-page">
          Add Student
        </ChakraLink>
      </Box>
    </nav>
  );
};

export default Navbar;
