import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstPage from "./pages/firstPage/firstPage";
import DashPage from "./pages/dashPage/DashPage";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const firstLoad = useSelector(state => state.isLoading.firstLoad);

  useEffect(() => {
    dispatch({ type: "INITIAL_MOUNT", status: true });
  }, [dispatch]);

  return firstLoad ? <FirstPage /> : <DashPage />;
};

export default App;
