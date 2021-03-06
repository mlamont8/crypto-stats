import { combineReducers } from "redux";
import errors from "./errors";
import initialLoadData from "./initialLoadData";
import isLoading from "./isLoading";
import searchTerm from "./searchTerm";
import historical from "./historical";
import coinByDay from "./coinByDay";
import coinByHour from "./coinByHour";
import searchArrays from "./searchArrays";
import topExchanges from "./topExchanges";
import coinId from "./coinId";
import coinName from "./coinName";
import coinUrl from "./coinUrl";
import liveResults from "./liveResults";
import byDollar from "./byDollar";
import news from "./news";
import notification from "./notification";
import modal from "./modal";

const cryptoApp = combineReducers({
  errors,
  modal,
  isLoading,
  initialLoadData,
  news,
  searchArrays,
  searchTerm,
  historical,
  coinByHour,
  coinByDay,
  topExchanges,
  liveResults,
  coinId,
  coinName,
  coinUrl,
  byDollar,
  notification
});

export default cryptoApp;
