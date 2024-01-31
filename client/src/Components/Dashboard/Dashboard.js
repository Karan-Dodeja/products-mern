import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar/Sidebar";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
      </div>
    </div>
  );
};
