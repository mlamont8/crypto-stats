export const SelectData = (id, item) => ({
  type: "SELECTION_ENTERED",
  id,
  item
});

export const apiCall = results => ({
  type: "API_CALL",
  results,
})

export const clearCurrent = () => ({
  type: "CLEAR_CURRENT"

})
export const notificationOption = option => ({
  type: "NOTIFICATION_TOGGLE",
  option
});

// Receives currentArray and toggles modal on
// new search
export const searchModal = currentArray => ({
  type: 'SEARCH_MODAL',
  currentArray,
})

export const searchReset = currentArray => ({
  type: "SEARCH_RESET",
  currentArray,
})

export const idUpdate = id => ({
  type: "ID_UPDATE",
  id
})

export const closeModal = currentArray => ({
  type: "CLOSE_MODAL",
  currentArray,
})

// If error, set modal to open,
// set currentArray to empty,
// send error info to modal
export const coinError = (error) => ({
  type: "COIN_LISTING_ERROR",
  error
})