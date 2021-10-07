import { v4 as uuidv4 } from 'uuid';
import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from '../constants/ActionTypes';

const initialState = {
  books: [
    {
      id: uuidv4(),
      name: 'The Lord of the Rings',
      price: 40,
      category: 'Fiction',
    },
    { id: uuidv4(), name: 'Atomic Habits', price: 20, category: 'Self Help' },
    {
      id: uuidv4(),
      name: "Man's Search for Meaning",
      price: 30,
      category: 'Biography',
    },
  ],
};

export const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BOOK:
      payload.id = uuidv4();
      return {
        ...state,
        books: [...state.books, payload],
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== payload),
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === payload.id
            ? {
                ...book,
                name: payload.name,
                category: payload.category,
                price: payload.price,
              }
            : book
        ),
      };
    default:
      return state;
  }
};
