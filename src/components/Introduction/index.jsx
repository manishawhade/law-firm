import { Typography } from "@mui/material";
import "./index.css";
import GiftIcon from "../../assets/gift-icon.svg";

const Introduction = () => {
  return (
    <div
      style={{
        padding: "70px 0 70px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "15%",
        }}
      >
        <Typography variant="h3">Let’s Introduce Ourself</Typography>
        <hr />
        <div>
          <Typography variant="h4">Criminal Lawyer</Typography>
          <Typography variant="caption">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exercitation.
          </Typography>
        </div>
      </div>
      <div
        style={{
          marginTop: "10%",
          textAlign: "center",
        }}
      >
        <Typography variant="h3">Why Choose us?</Typography>
        <div className="cards-div">
          <div className="card">
            <img src={GiftIcon} alt="GiftIcon" />
            <Typography variant="h5">98% Success Rate</Typography>
            <Typography variant="caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <button>Read More</button>
          </div>
          <div className="card middle-card">
            <img src={GiftIcon} alt="GiftIcon" />
            <Typography variant="h5">100% Success Rate</Typography>
            <Typography variant="caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <button>Read More</button>
          </div>
          <div className="card">
            <img src={GiftIcon} alt="GiftIcon" />
            <Typography variant="h5">100% Success Rate</Typography>
            <Typography variant="caption">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Introduction;
