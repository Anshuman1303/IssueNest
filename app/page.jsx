import React from "react";
import NavigateNext from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { Button } from "@mui/material";

const page = () => {
  return (
    <div className="home-banner">
      <h1>IssueNest</h1>
      <h3>Managing issues made easy</h3>
      <Link href="/user">
        <Button variant="outlined" color="secondary">
          Get Started <NavigateNext />
        </Button>
      </Link>
    </div>
  );
};

export default page;
