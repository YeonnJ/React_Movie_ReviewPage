import "./App.css";
import ReviewList from "./components/ReviewList";
import items from "./components/mock.json";

function App() {
  return (
    <div className="App">
      <ReviewList items={items} />
    </div>
  );
}

export default App;
