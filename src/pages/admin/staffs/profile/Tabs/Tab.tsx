import React, { useState } from "react";
import DetailsTap from "../DetailsTap/DetailsTap";

const Tab = () => {
  const [detailsTab, setDetailsTab] = useState(true);

  const handleDetailsTab = () => {
    setDetailsTab(false);
  };
  const handleMediaTab = () => {
    setDetailsTab(true);
  };

  return (
    <div>
      <div className="bg-[#a3b8c6] rounded-xl h-14 flex items-center justify-center gap-5 text-xl font-semibold">
        {detailsTab ? (
          <>
            <button className="border-b-4 border-blue-600  text-blue-500">
              Details
            </button>
            <button onClick={handleDetailsTab}>Media</button>
          </>
        ) : (
          <>
            <button onClick={handleMediaTab}>Details</button>
            <button className="border-b-4 border-blue-600  text-blue-500">
              Media
            </button>
          </>
        )}
      </div>
      {detailsTab ? <DetailsTap /> : "c"}
    </div>
  );
};

export default Tab;
