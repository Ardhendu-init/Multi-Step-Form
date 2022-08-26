import type { NextPage } from "next";
import React from "react";
import MainForm from "../components/forms/MainForm";
import { Provider } from "react-redux";
import { store, persistor } from "../app/store";

import { PersistGate } from "redux-persist/integration/react";
const Home: NextPage = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainForm />
        </PersistGate>
      </Provider>
    </>
  );
};

export default Home;
