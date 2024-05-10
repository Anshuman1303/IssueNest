import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const bull = (
  <Box component="span" sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}>
    •
  </Box>
);

export default function BasicCard({ dataItem }) {
  return (
    <Card sx={{ minWidth: 275 }} className="issue-card card-shadow">
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {dataItem.repo}/issue #{dataItem.issue_number}
        </Typography>
        <Typography variant="h5" component="div">
          {dataItem.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {dataItem.description}
        </Typography>
        <button className="black_btn">
          <GitHubIcon /> &nbsp; Open in GitHub
        </button>
      </CardContent>
    </Card>
  );
}
