import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          <p>
            <a
              href="https://github.com/luchaninova/react_weather_upp"
              target="_blank"
              rel="noreferrer"
            >
              Open-soursed progect
            </a>{" "}
            by Irina Luchaninova
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
