import "./App.css";
import ReviewList from "./components/ReviewList/ReviewList";
import { useState } from "react";
import { getReviews } from "./components/api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortItem = items.sort((a, b) => b[order] - a[order]); //평점 높은순으로 보여주기

  const handleNewClick = () => setOrder("createAt");

  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoadClick = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  return (
    <div className="App">
      <div>
        <button onClick={handleNewClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortItem} onDelete={handleDelete} />
      <button onClick={handleLoadClick}>불러오기</button>
    </div>
  );
}

export default App;
