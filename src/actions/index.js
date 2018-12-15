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
export const initialSearch = (currentArray, searchTerm, id, toggle) => ({
  type: "INITIAL_SEARCH",
  currentArray,
  searchTerm,
  id,
  toggle
})

// Receives currentArray and toggles modal on
// new search
export const newSearch = (currentArray, toggle) => ({
  type: ''
})

export const searchReset = (currentArray, searchTerm, toggle) => ({
  type: "SEARCH_RESET",
  currentArray,
  searchTerm,
  toggle
})

export const idUpdate = (id) => ({
  type: "ID_UPDATE",
  id
})

export const closeModal = (toggle) => ({
  type: "CLOSE_MODAL",
  toggle
})