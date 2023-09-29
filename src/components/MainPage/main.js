import React, { useState, useEffect } from "react";
import NewsGrid from "../NewsGrid/news-grid";
import "./main.css";
import Menu from "../Menu/menu";
import { DotLoader } from "react-spinners";

function Home() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e78f12e23257429c85eb311688c974a0`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight;

      if (isAtBottom && !isLoading) {
        fetchNews();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  const fetchNews = () => {
    setIsLoading(true);

    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&page=${page}&apiKey=e78f12e23257429c85eb311688c974a0`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data && data.articles && Array.isArray(data.articles)) {
          setItems((prevItems) => [...prevItems, ...data.articles]);
          setPage((prev) => prev + 1);
        } else {
          console.error("Data.articles is missing or not an array:", data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="home">
      <h2 className="home-title">Latest News</h2>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
      <div className="loading-spinner-container">
        {isLoading && <DotLoader />}
      </div>
    </div>
  );
}

export default Home;
