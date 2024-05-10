"use client";
import React, { useState } from "react";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./page.css";

function getStyles(stack, stackName, theme) {
  return {
    fontWeight: stackName.indexOf(stack) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}
export default function page() {
  const [level, setLevel] = useState("");
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const stacks = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Flask",
    "Python",
    "C",
    "C++",
    "Java",
  ];

  const theme = useTheme();
  const [stackName, setStackName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setStackName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <div className="register-form-wrap">
      <Box className="register-form" component="form">
        <FormControl fullWidth>
          <TextField id="token" label="Github Token" variant="outlined" />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="stackLabel">Tech Stack</InputLabel>
          <Select
            labelId="stackLabel"
            id="stackSelect"
            multiple
            value={stackName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-stack" label="Tech Stack" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}>
            {stacks.map((stack) => (
              <MenuItem key={stack} value={stack} style={getStyles(stack, stackName, theme)}>
                {stack}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="levelLabel">Level</InputLabel>
          <Select labelId="levelLabel" id="demo-simple-select" value={level} label="Level" onChange={(e) => setLevel(e.target.value)}>
            <MenuItem value={0}>Beginner</MenuItem>
            <MenuItem value={1}>Intermediate</MenuItem>
            <MenuItem value={2}>Advanced</MenuItem>
            <MenuItem value={3}>Professional</MenuItem>
          </Select>
        </FormControl>
        <Button size="large" variant="outlined" color="secondary">
          Submit
        </Button>
      </Box>
    </div>
  );
}
