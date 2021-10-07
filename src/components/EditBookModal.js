import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

export const EditBookModal = ({ onClose, isOpen, onSubmit, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => onClose()}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Book</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  id="name"
                  type="text"
                  {...register('name', { required: true })}
                />
                <FormErrorMessage mb={2}>
                  This field is required
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.category}>
                <FormLabel>Category</FormLabel>
                <Input
                  type="text"
                  id="category"
                  {...register('category', { required: true })}
                />
                <FormErrorMessage mb={2}>
                  This field is required
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.price}>
                <FormLabel>Price</FormLabel>
                <Input
                  type="number"
                  id="price"
                  {...register('price', { required: true })}
                />
                <FormErrorMessage mb={2}>
                  This field is required
                </FormErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="teal" type="submit">
                Edit
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};
