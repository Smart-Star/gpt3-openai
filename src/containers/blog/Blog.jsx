import { Article } from '../../components';
import { article } from '../../constants/data';
import './blog.css';

export const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          {article
            .filter((item) => item.id === 1)
            .map((item) => (
              <Article
                key={item.id}
                imgUrl={item.image}
                title={item.title}
                date={item.date}
              />
            ))}
        </div>
        <div className="gpt3__blog-container__groupB">
          {article
            .filter((item) => item.id !== 1)
            .map((item) => (
              <Article
                key={item.id}
                imgUrl={item.image}
                title={item.title}
                date={item.date}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
