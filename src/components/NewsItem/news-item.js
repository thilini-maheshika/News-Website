import React from 'react'
import './news-item.css'

function NewsItem({item}) {

    const websiteUrl = item.url
    const website = websiteUrl.split('https://').pop().split('/')[0]

    const date = item.publishedAt
    const formatDate = date.replace('T','')
    const formatTime = formatDate.replace('Z','')

    return (
            <a href={item.url} className='article'>
                <div className='article-img'>
                    <img src={item.urlToImage} alt={item.title}/>
                </div>
                <div className='article-content'>
                    <div className='article-source'>
                        <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`} alt={item.source.id} />
                        <span>{item.source.name}</span>
                    </div>
                    <div className='article-title'>
                        <h2>{item.title}</h2>
                    </div>
                    <div className='author'>
                        <small>{item.author}</small>
                    </div>
                    <p className='article-desc'>
                        {item.description}
                    </p>
                    <div className='article-details'>
                        <small><b>published At :</b>{formatTime}</small>
                    </div>
                </div>
            </a>
    )
}

export default NewsItem
