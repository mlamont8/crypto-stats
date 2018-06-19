const news = (state = {}, action) => {
  switch (action.type) {
    case "NEWS_FETCH_SUCCESS":
      return {
        ...state,
        news: action.news.data.Data
      };

    default:
      return state;
  }
};

export default news;
