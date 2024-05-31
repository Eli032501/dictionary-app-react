import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App py-5">
      <Dictionary />

      <fotter>
        <p className="footer-text">
          This project was coded by{" "}
          <a
            href="https://github.com/Eli032501"
            target="_blank"
            rel="noreferrer"
          >
            Eliana Pereira
          </a>{" "}
          and is on{" "}
          <a
            href="https://github.com/Eli032501/dictionary-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dictionary-app-react-eli.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </fotter>
    </div>
  );
}

export default App;
