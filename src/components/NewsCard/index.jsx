import {
  CalendarOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const NewsCard = ({ itm, cat }) => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={itm?.urlToImage} alt="rover" />
      </div>
      <div className="card-body">
        <h4>
          {itm?.content.substring(0, 80)}
          {itm?.content.length > 80 ? "...." : ""}
        </h4>
        <div>
          <CalendarOutlined className="ico" />
          {itm?.publishedDate}
        </div>
        <div className="detal">
          <span className="tag tag-teal">{cat}</span>
          <span>
            <HeartOutlined className="ico" />
            <ShareAltOutlined className="ico" />
          </span>
          {/* <HeartFilled /> */}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
