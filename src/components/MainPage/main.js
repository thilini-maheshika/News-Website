import React, { useState , useEffect } from 'react'
import NewsGrid from '../NewsGrid/news-grid'
import './main.css'

function Home() {

    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const [category, setCategory] = useState("general");

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=285752f237044577bc3b418fa378fc69`)
        .then(res => res.json())
        .then(data => setItems(data.articles))
    }, [category]
    )


  return (
    <div className='home'>
        <h2 className='home-title'>Latest News</h2>
        <NewsGrid items={items}/>
    </div>
  )
}

export default Home
