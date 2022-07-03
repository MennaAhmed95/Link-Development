import { useEffect, useState } from "react";
import axiosInstance from "./../../helpers/axiosInstance";
import Slice from "../Slice";
import { Zoom } from "react-slideshow-image";

const HeaderSec = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axiosInstance()
      .get("fee177346e7875554413")
      .then((res) => {
        console.log(res.data);
        setSlides(res?.data?.slides);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const properties = {
    duration: 5000000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <section className="headerSec">
      <Zoom {...properties}>
        {slides.map((itm) => (
          <Slice key={itm.id} slide={itm} />
        ))}
      </Zoom>
    </section>
  );
};

export default HeaderSec;
