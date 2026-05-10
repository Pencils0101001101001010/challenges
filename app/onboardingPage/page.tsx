import React from "react";
import OnboardingPage from "../components/(onboarding)/OnboardingPage";

export const metadata = {
  title: "Onboarding Landing page",
  description: "Lets get started",
};

function page() {
  return (
    <div>
      <OnboardingPage />
    </div>
  );
}

export default page;
