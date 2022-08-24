import type { NextPage } from "next";
import React from "react";
import MainForm from "../components/forms/MainForm";
import { Provider } from "react-redux";
import { store } from "../app/store";
const Home: NextPage = () => {
  return (
    <>
      <Provider store={store}>
        <MainForm />
      </Provider>
    </>
  );
};

export default Home;
