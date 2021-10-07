import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';
import { MdAdd } from 'react-icons/md';

export const NavBar = ({ openAddBookModal }) => {
  return (
    <>
      <Box
        h={'5em'}
        backgroundColor="blue.800"
        px="2em"
        position="fixed"
        minW="100%"
        zIndex="1"
        top="0"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontWeight="bold" fontSize="2xl" color="white" pt="10px">
            Book Store
          </Text>

          <Button
            leftIcon={<MdAdd />}
            colorScheme="twitter"
            mt={5}
            onClick={openAddBookModal}
          >
            Add Book
          </Button>
        </Flex>
      </Box>
    </>
  );
};
