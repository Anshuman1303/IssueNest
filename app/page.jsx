import React from "react";
import NavigateNext from "@mui/icons-material/NavigateNext";
import Link from "next/link";
const page = () => {
  return (
    <div className="home-banner">
      <h1>IssueNest</h1>
      <h3>Managing issues made easy</h3>
      <Link href="/user">
        <button className="black_btn">
          Get Started <NavigateNext />
        </button>
      </Link>
    </div>
  );
};

export default page;
