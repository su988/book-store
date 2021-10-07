import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../constants/ActionTypes';

export const addBook = (book) => {
  return {
    type: ADD_BOOK,
    payload: book,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOK,
    payload: id,
  };
};

export const editBook = (book) => {
  console.log(book);
  return {
    type: EDIT_BOOK,
    payload: book,
  };
};
