import React from "react";
import HomeMonitorDash from "../components/(homeMonitorDash)/HomeMonitorDash";

export const metadata = {
  title: "Home monitor system | Dashboard",
  description: "Stay inform of what goes on at home.",
};

function page() {
  return (
    <div>
      <HomeMonitorDash />
    </div>
  );
}

export default page;
