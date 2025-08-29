import React from "react";
import BaseTemplate from "../components/layout/BaseTemplate";
import DriverContent from "./driver/driverContent.jsx";

const DriverDashboard = ({ user }) => {
  console.log("DriverContent render: user", user);
  return (
    <BaseTemplate>
      <DriverContent></DriverContent>
    </BaseTemplate>
  );
};
export default DriverDashboard;







