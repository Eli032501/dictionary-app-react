import "./App.css";

function App() {
  return (
    <div className="App py-5">
      <div className="row mb-5">
        <div className="col-6"></div>
        <div className="col-4">
          <input className="w-75" type="text" />
          <input className="w-25" type="submit" value="Search" />
        </div>
        <div className="col-2"></div>
      </div>
      <h1>Dictionary</h1>
      <div className="row ">
        <div className="col-6"></div>
        <p className="col-4">what word do you want to look up?</p>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
