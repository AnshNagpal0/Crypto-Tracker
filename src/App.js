import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./App.css";
import { Alert } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <div class="App">
        <Header />
        <Routes>
          <Route path="/" Component={HomePage} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
