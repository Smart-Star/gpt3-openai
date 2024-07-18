import './article.css';

export const Article = ({ imgUrl, title, date }) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-img">
        <img src={imgUrl} alt="blog" />
      </div>

      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>

        <p>Read Full Article</p>
      </div>
    </div>
  );
};
