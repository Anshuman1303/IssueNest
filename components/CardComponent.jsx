import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

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
        <Button variant="text" color="primary">
          <GitHubIcon /> &nbsp; Open in GitHub
        </Button>
      </CardContent>
    </Card>
  );
}
