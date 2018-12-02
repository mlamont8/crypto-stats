export const SelectData = (id, item) => {
  console.log('id', id)
  console.log('item', item)
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
