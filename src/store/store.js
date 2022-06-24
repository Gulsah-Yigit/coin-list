import { configureStore } from "@reduxjs/toolkit";
import coinState from "./reducers/coinState";

export default configureStore({
  reducer: {
    coinState: coinState,
  },
});
