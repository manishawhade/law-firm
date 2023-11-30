import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Typography from "@mui/material/Typography";
import "./index.css";
import User1Icon from "../../assets/user1.png";
import User2Icon from "../../assets/user2.png";
import User3Icon from "../../assets/user3.png";

const Clients = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "70px 0 70px 0",
        }}
      >
        <Typography variant="h3">What says our happy Clients</Typography>
        <div>
          <button className="arrow-button-prev arrow"></button>
          <button className="arrow-button-next arrow"></button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={3}
        navigation={{
          nextEl: ".arrow-button-next",
          prevEl: ".arrow-button-prev",
        }}
      >
        <div className="cards-div">
          <SwiperSlide>
            <div className="card1">
              <img src={User1Icon} alt="GiftIcon" />
              <Typography variant="h5">Jane Cooper</Typography>
              <Typography variant="subtitle1">CEO of Hunt</Typography>
              <Typography variant="caption">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card1 middle-card">
              <img src={User2Icon} alt="GiftIcon" />
              <Typography variant="h5">Devon Lane</Typography>
              <Typography variant="subtitle1">CEO of Hunt</Typography>
              <Typography variant="caption">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card1">
              <img src={User3Icon} alt="GiftIcon" />
              <Typography variant="h5">Robert Fox</Typography>
              <Typography variant="subtitle1">CEO of Hunt</Typography>
              <Typography variant="caption">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card1">
              <img src={User1Icon} alt="GiftIcon" />
              <Typography variant="h5">User 4</Typography>
              <Typography variant="subtitle1">CEO of Hunt</Typography>
              <Typography variant="caption">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
};
export default Clients;
