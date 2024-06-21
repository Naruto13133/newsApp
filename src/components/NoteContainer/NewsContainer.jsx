import React, { useEffect, useState } from "react";

const NewsContainer = ({ country = "india" }) => {
  NewsContainer.defaultProps = {
    data: "india",
  };
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("2111111111111111111111111111111");
        console.log(props.data);
        if (
          props.country === null ||
          props.country === undefined ||
          props.country.length === 0
        ) {
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?q=india&apiKey=e2c8e407cc2644c186c706b876dda0e1`
          );
        } else {
          const response = await fetch(
            `https://newsapi.org/v2/top-headlines?q=${props.country}&apiKey=e2c8e407cc2644c186c706b876dda0e1`
          );
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log(jsonData.articles);

        setArticles(
          jsonData.articles.filter(
            (element) => element.title !== null && element.description !== null
          )
        );
        console.log(articles);
        // setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.data]);

  return (
    <div>
      {articles.map((article) => (
        <Note
          ImageUrl={article.urlToImage}
          url={article.url}
          head={article.title}
          text={article.description}
          time={article.author + "  " + article.publishedAt}
          id={article.url}
          key={article.url}
          child={article}
          onDelete={() => handleDelete(article.id)}
        />
      ))}
    </div>
  );
};

export default NewsContainer;
