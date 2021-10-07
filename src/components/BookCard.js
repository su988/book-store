import React from 'react';
import {
  Box,
  Center,
  Flex,
  Image,
  Badge,
  Text,
  Button,
} from '@chakra-ui/react';
import { MdDeleteForever } from 'react-icons/md';

export const BookCard = ({ book, onDeleteClick, onEditClick }) => {
  return (
    <>
      <Box
        p="5"
        maxW="320px"
        borderWidth="1px"
        borderColor="gray.800"
        pos="relative"
      >
        <Box onClick={onEditClick} as="button">
          <Center>
            <Image borderRadius="md" src={'./book.jpg'} />
          </Center>
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="twitter">{book.category}</Badge>
          </Flex>
          <Text mt={2} fontSize="l" fontWeight="semibold" lineHeight="short">
            {book.name}
          </Text>
          <Text mt={2} fontSize="lg" align="right">
            ${book.price}
          </Text>
        </Box>
        <Button
          leftIcon={<MdDeleteForever />}
          colorScheme="red"
          width="100%"
          mt={5}
          onClick={() => onDeleteClick(book.id)}
        >
          Delete
        </Button>
      </Box>
    </>
  );
};
