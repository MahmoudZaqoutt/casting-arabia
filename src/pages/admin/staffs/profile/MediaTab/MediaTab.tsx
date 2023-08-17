import React from "react";
import MediaTabSections from "./MediaTabSections/MediaTabSections";

const MediaTab = () => {
  return (
    <div>
      <MediaTabSections title="Head Shots" />
      <MediaTabSections title="Body Shots" />
      <MediaTabSections title="Videos" />
      <MediaTabSections title="Voices" />
      <MediaTabSections title="Documents" />
    </div>
  );
};

export default MediaTab;
