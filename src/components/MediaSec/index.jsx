import NewsCard from "./../NewsCard/index";
// import img from "./../../assets/images/zxc.png";
import axiosInstance from "../../helpers/axiosInstance";
import { useEffect, useState } from "react";

const MediaSection = () => {
  const [cat, setCat] = useState([{ id: 0, name: "All news" }]);
  const [news, setNews] = useState([]);
  const [filteredNews, setfilteredNews] = useState(news);
  const [tab, setTab] = useState(0);
  useEffect(() => {
    axiosInstance()
      .get("91298d970c27e9a06518")
      .then((res) => {
        console.log(res.data);
        setCat(res?.data?.newsCategory);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    axiosInstance()
      .get("d275425a434e02acf2f7")
      .then((res) => {
        console.log(res.data);
        setNews(res?.data?.News);
        setfilteredNews(res?.data?.News);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cat]);
  const handleTabs = (id) => {
    setTab(id);
    if (id !== 0) setfilteredNews(news.filter((itm) => +itm.categoryID === id));
    else setfilteredNews(news);
  };
  return (
    <div className="mediasec">
      <h3>Media</h3>
      <h2>Top News</h2>
      <div className="tabCont">
        <span
          className={tab === 0 ? "tag mr active" : "tag mr"}
          onClick={() => handleTabs(0)}
        >
          All news
        </span>
        {cat.map((itm) => (
          <span
            key={itm.id}
            className={itm.id === tab ? "tag mr active" : "tag mr"}
            onClick={() => handleTabs(itm.id)}
          >
            {itm.name}
          </span>
        ))}
      </div>
      <section className="containCards">
        {filteredNews.length > 0 ? (
          filteredNews.map((itm) => (
            <NewsCard
              key={itm.id}
              itm={itm}
              cat={cat.find((catt) => catt.id === +itm.categoryID)?.name}
            />
          ))
        ) : (
          <div>Not Found</div>
        )}
      </section>
    </div>
  );
};

export default MediaSection;
