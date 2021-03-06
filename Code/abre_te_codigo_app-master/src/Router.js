import React from "react";
import { LogBox } from "react-native";
import { Scene, Router } from "react-native-router-flux";
import GameOver from "./components/screens/GameOver";
import MainMenu from "./components/screens/MainMenu";
import TriviaGame from "./components/screens/TriviaGame";
import TriviaSelection from "./components/screens/TriviaSelection";

LogBox.ignoreAllLogs();

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main" hideNavBar={true}>
        <Scene key="mainMenu" component={MainMenu} />
        <Scene key="triviaSelection" component={TriviaSelection} />
        <Scene key="triviaGame" component={TriviaGame} initial />
        <Scene key="gameOver" component={GameOver} />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
