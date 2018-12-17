export const SelectData = (id, item) => {
  console.log('selection', id, item)
  return {
    type: "SELECTION_ENTERED",
    id,
    item
  }
};

export const notificationOption = (option) => ({
  type: "NOTIFICATION_TOGGLE",
  option
});

// Opens modal on original and new search
// Resets searchTerm on searchTerm tree
export const initialSearch = (currentArray) => ({
  type: "INITIAL_SEARCH",
  currentArray,
})

// Receives currentArray and toggles modal on
// new search
export const newSearch = () => ({
  type: ''
})

export const searchReset = (currentArray) => ({
  type: "SEARCH_RESET",
  currentArray,
})

export const idUpdate = (id) => ({
  type: "ID_UPDATE",
  id
})

export const closeModal = (currentArray) => ({
  type: "CLOSE_MODAL",
  currentArray,
})