import './App.css';

function App() {
  const name = "";
  return <div className="container">
    <h1>Hello from react to {name}</h1>
    <h2>Hello {name ? name : "there is no name"}</h2>
  </div>;
}

export default App;
