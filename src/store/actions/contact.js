export const saveOnStorage = contact => {
  const contacts = JSON.parse(localStorage.getItem("Contacts")) || [];
  localStorage.setItem("Contacts", JSON.stringify([...contacts, contact]));
  return {
    type: "SAVE_ON_STORAGE"
  };
};

export const addContact = contact => {
  return {
    type: "ADD_CONTACT",
    payload: { contact: contact }
  };
};
export const addOnState = contact => {
  return dispatch => {
    dispatch(addContact(contact));
    setTimeout(() => {
      saveOnStorage(contact);
    }, 100);
  };
};
export const fetchUsersFromStorage = () => {
  const contacts = JSON.parse(localStorage.getItem("Contacts")) || [];
  return {
    type: "FETCH_USERS",
    payload: { contacts: [...contacts] }
  };
};
