import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../src/utils/generateAvatar";
import { useState } from "react";

export const Avatar = () => {
  const initialConfig = {
    accessory: "shades",
    body: "chest",
    clothing: "tankTop",
    clothingColor: "black",
    eyebrows: "angry",
    eyes: "wink",
    facialHair: "mediumBeard",
    graphic: "vue",
    hair: "short",
    hairColor: "black",
    hat: "none",
    hatColor: "green",
    lashes: "false",
    lipColor: "purple",
    mask: "true",
    faceMask: "true",
    mouth: "open",
    skinTone: "brown",
  };
  const currentOptions = getRandomOptions() || initialConfig
  const [options, setOptions] = useState({...currentOptions,mask:true});
  return (
    <div
      onClick={()=>setOptions(getRandomOptions())}
      className="avatar cursor-pointer"
      style={{ position: "absolute", right: 38, top: 25 }}
    >
      <BigHead {...options}/>
    </div>
  );
};