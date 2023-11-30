import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "../../assets/add-icon.png";
import "./index.css";

const Faq = () => {
  return (
    <div style={{ padding: "70px 0 70px 0" }}>
      <Typography variant="h3">FAQ</Typography>
      <Grid container spacing={2} style={{ padding: "30px 0 0 0" }}>
        <Grid item xs={6}>
          <Typography variant="caption">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{" "}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">
            Do I need a personal injury report?
          </Typography>
          <Typography variant="caption">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
          <Accordion style={{ marginTop: "20px" }}>
            <AccordionSummary
              style={{
                background: "#1d1d1d",
                color: "#fff",
                borderTop: "1px solid #949494",
              }}
              expandIcon={<img src={AddIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lets connect via call</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "20px" }}>
            <AccordionSummary
              style={{
                background: "#1d1d1d",
                color: "#fff",
                borderTop: "1px solid #949494",
              }}
              expandIcon={<img src={AddIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>What should I do right after car accident</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lets connect via call</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ marginTop: "20px" }}>
            <AccordionSummary
              style={{
                background: "#1d1d1d",
                color: "#fff",
                borderTop: "1px solid #949494",
              }}
              expandIcon={<img src={AddIcon} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How much is my case worth?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lets connect via call</Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>

      <div className="news-letter">
        <Typography variant="h3">Subscribe Our Newsletter</Typography>
        <div style={{ display: "flex", gap: 5, justifyContent: "center" }}>
          <input
            style={{ borderRadius: "8px 0 0 8px", border: 0 }}
            placeholder="Name"
          />
          <input placeholder="Enter your Email" />
          <button>SEND</button>
        </div>
      </div>
    </div>
  );
};
export default Faq;
