import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstPage from "../../components/firstPage/firstPage";
import DashPage from "../dashPage/DashPage";

const Main = () => {
  const dispatch = useDispatch();
  const firstLoad = useSelector(state => state.isLoading.firstLoad);

  useEffect(() => {
    dispatch({ type: "INITIAL_MOUNT", status: true });
  }, [dispatch]);

  return firstLoad ? <FirstPage /> : <DashPage />;
};

export default Main;
