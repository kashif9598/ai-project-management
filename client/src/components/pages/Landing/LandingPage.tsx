import React from "react";
import { LandingNavbar } from "./landing-navbar";
import landingPreview from "../../../assets/images/landingPreview.png";
import AuthCard from "../Auth/auth-card";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <LandingNavbar />

      <div className="grid h-[calc(100vh-64px)] lg:grid-cols-[60%_40%]">
        {/* LEFT SIDE */}
        <div className="hidden items-center justify-center p-6 lg:flex">
          <img
            src={landingPreview}
            alt="Landing Preview"
            className="h-[85vh] rounded-3xl object-contain"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center p-6">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
