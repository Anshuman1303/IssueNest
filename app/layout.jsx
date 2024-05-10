"use client";
import Nav from "@components/Nav";
import { SessionProvider } from "next-auth/react";
import "@styles/globals.css";
const layout = ({ children }) => {
  return (
    <html>
      <title>IssueNest</title>
      <body>
        <SessionProvider>
          <Nav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
};

export default layout;
