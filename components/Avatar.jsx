import { BigHead } from "@bigheads/core";
import { getRandomOptions } from "../src/utils/generateAvatar";
import { useState } from "react";
import Pencil from "./Pencil";

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
      className="avatar cursor-pointer flex flex-col"
      style={{ position: "absolute", right: 38, top: 25 , alignItems:'flex-end' }}
    >
      <BigHead {...options}/>
      <div style={{marginTop:-12}}>
        <Pencil className="w-6"/>
      </div>
    </div>
  );
};