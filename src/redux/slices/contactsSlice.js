import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialContacts } from 'data/initial-contacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts.items,
  reducers: {
    addContact: {
      reducer(state, action) {
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

console.log(contactsSlice);

export const { addContact, deleteContact } = contactsSlice.actions;
