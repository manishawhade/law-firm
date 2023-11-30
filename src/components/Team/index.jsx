import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Team1Icon from "../../assets/team1.png";
import Team2Icon from "../../assets/team2.png";
import Team3Icon from "../../assets/team3.png";
import Team4Icon from "../../assets/team4.png";
import Team5Icon from "../../assets/team5.png";
import Team6Icon from "../../assets/team6.png";

const Team = () => {
  return (
    <div
      style={{
        marginTop: "10%",
        textAlign: "center",
      }}
    >
      <Typography variant="h3">Our Team</Typography>
      <Box sx={{ flexGrow: 1, marginTop: "50px" }}>
        <Grid container spacing={2}>
          {TEAMLIST.map((x, i) => (
            <Grid item xs={4} key={i}>
              <div
                id={`team_${i}`}
                style={{
                  display: "flex",
                  padding: "20px",
                  borderRadius: "14px",
                }}
              >
                <img src={x.image} alt="Icon1" />
                <div
                  style={{
                    textAlign: "start",
                    marginLeft: "10px",
                    marginTop: "5px",
                  }}
                >
                  <Typography variant="h6">{x.name}</Typography>
                  <Typography variant="caption">{x.cases} cases</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};
export default Team;

const TEAMLIST = [
  { name: "Danial Def", cases: 301, image: Team1Icon },
  { name: "Sanfole", cases: 850, image: Team2Icon },
  { name: "Cesforila", cases: 470, image: Team3Icon },
  { name: "Colleen", cases: 180, image: Team4Icon },
  { name: "Haldone", cases: 212, image: Team5Icon },
  { name: "Nik Jeo", cases: 350, image: Team6Icon },
];
