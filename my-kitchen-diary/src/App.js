import "./App.css";
import LoginPage from "./Login";
import Navbarmenu from "./Navbar";
import "./bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Navbarmenu />
        </div>
        <div>
          <LoginPage />
        </div>
      </header>
    </div>
  );
}

export default App;
