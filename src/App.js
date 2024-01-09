import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm.js";
import SignUpForm from "./components/SignUpForm/SignUpForm.js";

function App() {
  return (
    <div className="App">
      <LoginForm />
      {/* <SignUpForm /> */}
    </div>
  );
}

export default App;
