import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(type, message) {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => setAlert(null), 1500);
  }

  function handleMode() {
    let body = document.body;
    if (mode === "light") {
      body.style.backgroundColor = "#11052C";
      body.style.color = "white";
      setMode("dark");
      showAlert("success", "Dark  Mode Enabled");
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      setMode("light");
      showAlert("success", "Light Mode Enabled");
    }
  }
  return (
    <>
      <Router>
        <Navbar
          brandName="TextUtils"
          aboutText="About Us"
          mode={mode}
          handleMode={() => handleMode()}
        />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextArea heading="Analyze Text" mode={mode} alert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
