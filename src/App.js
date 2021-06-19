function App() {
  function onClick() {
    fetch("http://localhost:8090/run")
  }

  return (
    <div className="App">
      <button onClick={onClick}>Run</button>
    </div>
  );
}

export default App;
