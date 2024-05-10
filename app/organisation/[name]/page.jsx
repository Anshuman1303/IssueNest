"use client";
import { useEffect, useState } from "react";
import data from "@models/data";
import CardComponent from "@components/CardComponent";

const OrgPage = ({ params }) => {
  const name = params.name;
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    const fetchIssues = async () => {
      // const data = await res.json();
      //   const res = await fetch("../../models/data.json");
      //   const data = await res.json();
      let is = data.issues.filter(
        (issue) => issue.organization_linked_to === name
      );

      setIssues(is);
    };
    fetchIssues();
  }, []);
  return (
    <div>
      {issues.map((dataItem, index) => (
        <CardComponent
          dataItem={dataItem}
          key={index}
          className="card-shadow"
        />
      ))}
    </div>
  );
};

export default OrgPage;
