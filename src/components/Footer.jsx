import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box className="footer" bg="gray.200" py={4} textAlign="center" data-testid="footer">
      <Text className="studentName" data-testid="studentName">
        Azwar Anas
      </Text>
      <Text className="studentId" data-testid="studentId">
        FE4509109
      </Text>
    </Box>
  );
};

export default Footer;
