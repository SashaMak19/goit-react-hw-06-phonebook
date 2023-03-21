import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initial-contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        const isExistingContact = state.find(
          ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase()
        );

        if (isExistingContact) {
          return alert(`${action.payload.name} is already in contacs.`);
        }

        state.push(action.payload);
      },
      prepare({ name, number }) {
        const newContact = {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };

        return newContact;
      },
    },

    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
