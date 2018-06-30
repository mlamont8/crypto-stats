const notification = (state = { option: "on" }, action) => {
    switch (action.type) {
        case "NOTIFICATION_TOGGLE":
            return {
                ...state,
                option: state.option === "on" ? "off" : "on"
            };
        default:
            return state;
    }
};
export default notification;