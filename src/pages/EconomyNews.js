// ./pages/EconomyNews.js
import React, { useEffect, useState } from 'react';

const EconomyNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEconomyNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=business&country=tr&apiKey=YOUR_API_KEY');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        setError('Failed to fetch economy news');
      }
    };

    fetchEconomyNews();
  }, []);

  return (
    <div className="economy-news">
      <h2>Ekonomi Haberleri</h2>
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <ul className="news-list">
          {news.map((article, index) => (
            <li key={index} className="news-item">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <p><small>{article.source.name}</small></p>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EconomyNews;
