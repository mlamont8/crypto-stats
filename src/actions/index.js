export const SelectData = (id, item) => ({
  type: "SELECTION_ENTERED",
  id,
  item
});

export const notificationOption = (option) => ({
  type: "NOTIFICATION_TOGGLE",
  option
});
