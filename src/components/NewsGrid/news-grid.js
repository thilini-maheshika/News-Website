import React from 'react';
import NewsItem from '../NewsItem/news-item';
import './news-grid.css'

function NewsGrid({items}) {
  return (
    <div className='news-grid'>
        {items.map((item, i) => (
            <NewsItem key={i} item={item} />
        ))}
    </div>
  );
}

export default NewsGrid;
