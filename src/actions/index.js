export const SelectData = (id, item) => {
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

export const modalState = (toggle) => ({
  type: "MODAL_TOGGLE",
  toggle
})

export const searchReset = (currentArray) => ({
  type: "SEARCH_RESET",
  currentArray
})