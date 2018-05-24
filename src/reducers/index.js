import { combineReducers } from "redux";
import initialLoadData from "./initialLoadData";
import isLoading from "./isLoading";
import searchTerm from "./searchTerm";
import historical from "./historical";
import coinByDay from "./coinByDay";
import coinByHour from "./coinByHour";
import searchArrays from "./searchArrays";
import topExchanges from "./topExchanges";
import coinName from "./coinName";
import coinUrl from "./coinUrl";
import liveResults from "./liveResults";
import byDollar from "./byDollar";

const cryptoApp = combineReducers({
  isLoading,
  initialLoadData,
  searchArrays,
  searchTerm,
  historical,
  coinByHour,
  coinByDay,
  topExchanges,
  liveResults,
  coinName,
  coinUrl,
  byDollar
});

export default cryptoApp;
