import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setCoinList } from "./store/reducers/coinState";

import CurencyPage from "./pages/CurrencyPage";

import { API_URL } from "./constants";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(API_URL);
        dispatch(setCoinList(data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <CurencyPage />
    </div>
  );
};

export default App;
