import { Grid, Typography } from "@mui/material";
import BannerShape from "../../assets/banner-shape.svg";
import UserIcon from "../../assets/user-pic.png";
import MailIcon from "../../assets/message-icon.svg";
import "./index.css";

const Herosection = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        padding: "100px 0 100px 0",
        justifyContent: "space-between",
      }}
    >
      <Grid item sx={{ alignSelf: "end" }}>
        <div className="hero-content">
          <div>
            <Typography variant="h3">You don’t have to</Typography>
            <Typography variant="h3">Fight them Alone.</Typography>
          </div>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </Typography>
          <div className="input-div">
            <img src={MailIcon} alt="mail_icon" />
            <input type="text" placeholder="Enter your eamil address" />
            <button>Let's Talk</button>
          </div>
        </div>
      </Grid>
      <Grid item style={{ position: "relative" }}>
        <img src={BannerShape} alt="banner_shape" />
        <img className="user-img" src={UserIcon} alt="banner_shape" />
      </Grid>
    </Grid>
  );
};
export default Herosection;
