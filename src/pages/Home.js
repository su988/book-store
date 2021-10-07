import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SimpleGrid, Container, useDisclosure } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/actions/bookAction';
import { deleteBook, editBook } from '../redux/actions/bookAction';
import { BookCard } from '../components/BookCard';
import { NavBar } from '../components/NavBar';
import { AddBookModal } from '../components/AddBookModal';
import { EditBookModal } from '../components/EditBookModal';

export const Home = () => {
  const { books } = useSelector((state) => state.allBooks);
  const dispatch = useDispatch();

  const {
    isOpen: isBookAddOpen,
    onClose: onBookAddClose,
    onOpen: onBookAddOpen,
  } = useDisclosure();

  const {
    isOpen: isBookEditOpen,
    onClose: onBookEditClose,
    onOpen: onBookEditOpen,
  } = useDisclosure();

  const [currentBookForEditing, setCurrentBookForEditing] = useState(null);

  useEffect(() => {
    onBookEditOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBookForEditing]);

  const handleBookAddSubmit = (book) => {
    dispatch(addBook(book));
    onBookAddClose();
  };

  const handleEditBookClose = () => {
    setCurrentBookForEditing(null);
  };

  const handleBookEditOpen = (e, book) => {
    setCurrentBookForEditing(book);
  };

  const handleBookEditSubmit = (book) => {
    dispatch(editBook(book));
    setCurrentBookForEditing(null);
    onBookEditClose();
  };

  const handleBookDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <>
      <NavBar openAddBookModal={onBookAddOpen} />
      <Container centerContent="true" maxW="max-content" mt="9em" mb="5em">
        <SimpleGrid columns={[1, 2]} spacing={10}>
          {books?.map((book) => {
            return (
              <BookCard
                book={book}
                key={book.id}
                onDeleteClick={handleBookDelete}
                onEditClick={(e) => handleBookEditOpen(e, book)}
              />
            );
          })}
        </SimpleGrid>
      </Container>

      <AddBookModal
        isOpen={isBookAddOpen}
        onClose={onBookAddClose}
        onSubmit={handleBookAddSubmit}
      />

      {currentBookForEditing && (
        <EditBookModal
          isOpen={isBookEditOpen}
          onClose={handleEditBookClose}
          onSubmit={handleBookEditSubmit}
          defaultValues={currentBookForEditing}
        />
      )}
    </>
  );
};
