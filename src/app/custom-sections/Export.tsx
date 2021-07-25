import React from "react";

import Select from "@custom-elements/Select";
import TextInput from "@custom-elements/TextInput";
import Button from "@custom-elements/Button";

const Export = () => {
  return (
    <div className="export">
      <div className="export__content">
        <Select label="Format" placeholder="Select export format" options={["webp", "mp4", "amv"]} />

        <div className="export__content-inputgroup">
          <TextInput label="Width" onChange={() => null} value="" compact={true} />
          <TextInput label="Height" onChange={() => null} value="" compact={true} />
        </div>

        <Select label="Presets" placeholder="Select presets for video" options={["webp", "mp4", "amv"]} />

        <Button label="export video" type="primary" mode="contained" onClick={() => null}/>
      </div>
    </div>
  );
};

export default Export;
