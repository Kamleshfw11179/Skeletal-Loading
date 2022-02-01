import  { useState, useEffect } from "react";
import "./App.css";
import dummyData from "./components/dummyData";
import SkeletonCard from "./components/skeletonn"
import CardList from "./components/Cardlist";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(dummyData);
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (

    <div className="App">
        {loading ?<SkeletonCard />:
        videos.map((list, index) => {
          return (
            <section key={index}>
              <h2 className="section-title">{list.section}</h2>
              <CardList list={list} />
              <hr />
            </section>
          );
        })}
    </div>
  );
};
export default App;
