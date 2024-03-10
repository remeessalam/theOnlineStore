import { createSlice } from "@reduxjs/toolkit";
import data from "../app/courosalImage.json";
const INITIAL_STATE = {
  mainType: "men",
  mainTypeCatagories: [],
  subCategories: [],
};

const typeSlice = createSlice({
  name: "type",
  initialState: INITIAL_STATE,
  reducers: {
    getmen: (state, action) => {},
  },
});
