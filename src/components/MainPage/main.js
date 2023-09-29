import React, { useState , useEffect } from 'react'
import NewsGrid from '../NewsGrid/news-grid'
import './main.css'
import Menu from '../Menu/menu'

function Home() {

    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const [category, setCategory] = useState("general");

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e78f12e23257429c85eb311688c974a0`)
        .then(res => res.json())
        .then(data => setItems(data.articles))
    }, [category]
    )


  return (
    <div className='home'>
        <h2 className='home-title'>Latest News</h2>
        <Menu active={active} setActive={setActive} setCategory={setCategory} />
        <NewsGrid items={items}/>
    </div>
  )
}

export default Home
