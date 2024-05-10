"use client";
import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import { Grid } from "@mui/material";

const OrganisationPage = () => {
  const [projects, setProjects] = useState([]);
  const [contributors, setContributors] = useState([]);
  useEffect(() => {
    // get all the repo's from api
    setProjects(["B1", "B2", "B3"]);
  }, []);
  return (
    <div>
      <Grid container spacing={2}>
        {" "}
        <Grid item xs={8}>
          <List>
            {projects.map((project, index) => (
              <ListItem key={index} divider={index !== projects.length - 1}>
                <ListItemButton component="a" href="#">
                  <ListItemText primary={project}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={4}>
          <List>
            {contributors.map((contributor, index) => (
              <ListItem key={index} divider={index !== contributor.length - 1}>
                <ListItemButton component="a" href="#">
                  <ListItemText primary={contributor}></ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrganisationPage;

// projects->issues
// contributors
//
