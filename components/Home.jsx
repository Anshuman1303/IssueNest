"use client";
import { Card, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CardComponent from "@components/CardComponent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState, Fragment } from "react";
import { useSession } from "next-auth/react";
import data from "@models/data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Home = () => {
  const [issues, setIssues] = useState([]);
  let organisations = [
    { name: "Tech Innovators" },
    { name: "Acme Corp" },
    { name: "TechHub Innovations" },
    { name: "DataTech Solutions" },
    { name: "CodeCrafters Inc." },
    { name: "CyberNexus Technologies" },
    { name: "CloudWorks Enterprises" },
    { name: "InfraSoft Labs" },
    { name: "PixelPerfect Studios" },
    { name: "FutureTech Innovators" },
    { name: "SmartSolutions Co." },
    { name: "QuantumTech Industries" },
    { name: "A1" },
    { name: "A2" },
  ];
  const session = useSession();
  useEffect(() => {
    const f = async () => {
      // console.log(session);
      if (!session?.data?.accessToken) return;
      console.log(session.data.accessToken);
      const res = await fetch("/api/issues", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ accessToken: session.data.accessToken }),
      });
      console.log(await res.json());
    };
    f();
  }, [session]);
  useEffect(() => {
    const fetchIssues = async () => {
      // const data = await res.json();
      //   const res = await fetch("../../models/data.json");
      //   const data = await res.json();
      const is = data.issues;

      setIssues(is);
    };
    fetchIssues();
  }, []);
  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      <Grid item xs={8} className="issue-list">
        <h2>Issues assigned to you</h2>
        {issues.map((dataItem, index) => (
          <CardComponent dataItem={dataItem} key={index} className="card-shadow" />
        ))}
      </Grid>
      <Grid item xs={4}>
        <Item className="card-shadow">
          <h2>Organisations</h2>
          <List>
            {organisations.map((org, index) => (
              <Fragment key={index}>
                <ListItem key={org.name} divider={index !== organisations.length - 1}>
                  <ListItemText primary={org.name} className="cp"></ListItemText>
                </ListItem>
              </Fragment>
            ))}
          </List>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Home;
