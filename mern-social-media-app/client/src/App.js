import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./components/Home/Home.js";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Home />
      </Container>
    </BrowserRouter>
  );
};

export default App;
