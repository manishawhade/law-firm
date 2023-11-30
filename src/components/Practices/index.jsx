import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Icon1 from "../../assets/img1.png";
import Icon2 from "../../assets/img2.png";
import Icon3 from "../../assets/img3.png";
import Icon4 from "../../assets/img4.png";
import Icon5 from "../../assets/img5.png";
import Icon6 from "../../assets/img6.png";
import "./index.css";

const Practices = () => {
  return (
    <div style={{ textAlign: "center", padding: "70px 0 70px 0" }}>
      <Typography variant="h3">Area of Practices</Typography>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid container spacing={2}>
          <Grid item xs={8} className="grid-parent">
            <img src={Icon1} alt="Icon1" />
            <Typography variant="h6" className="grid-child">
              BUSINESS LAW
            </Typography>
          </Grid>
          <Grid item xs={4} className="grid-parent">
            <img src={Icon2} alt="Icon2" />
            <Typography variant="h6" className="grid-child">
              Partnership LAW
            </Typography>
          </Grid>
          <Grid item xs={4} className="grid-parent">
            <img src={Icon3} alt="Icon3" />
            <Typography variant="h6" className="grid-child">
              REAL ESTATE LAW
            </Typography>
          </Grid>
          <Grid item xs={8} className="grid-parent">
            <img src={Icon4} alt="Icon4" />
            <Typography variant="h6" className="grid-child">
              BUSINESS LAW
            </Typography>
          </Grid>
          <Grid item xs={8} className="grid-parent">
            <img src={Icon5} alt="Icon5" />
            <Typography variant="h6" className="grid-child">
              LANDLORD DISPUTES
            </Typography>
          </Grid>
          <Grid item xs={4} className="grid-parent">
            <img src={Icon6} alt="Icon6" />
            <Typography variant="h6" className="grid-child">
              ELDER ABUSE
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Practices;
