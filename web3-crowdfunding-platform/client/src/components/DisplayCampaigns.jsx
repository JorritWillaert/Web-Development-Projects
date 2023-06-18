import React from "react";
import { useNavigate } from "react-router-dom";
import { loader } from "../assets";

const DisplayCampaigns = ({ title, isLoading, campaigns }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap mt-[20px] gap-[26px]">
      <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">
        {title} ({campaigns.length})
      </h1>
    </div>
  );
};

export default DisplayCampaigns;
