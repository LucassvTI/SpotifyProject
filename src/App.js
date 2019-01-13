import React from "react";
//import { Router } from "react-router";

import GlobalStyle from "./styles/global";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";

import { Wrapper, Container, Content } from "./styles/components";

//import Routes from "./routes";

const App = () => (
  <React.Fragment>
    <GlobalStyle />

    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </React.Fragment>
);

export default App;
