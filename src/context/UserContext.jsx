import React, { createContext, useContext, useState } from "react";
import { getRandomOptions } from "../utils/generateAvatar";

const userContext = createContext(null);
export const useUserContext = () => useContext(userContext);


export default function UserContext({ children }) {
    function generate() {
        const initial = [];
        for (let index = 0; index < 10; index++) {
          initial.push(getRandomOptions());
        }
        return initial;
      }
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
  const currentOptions = getRandomOptions() || initialConfig;
  const [options, setOptions] = useState(currentOptions);
  const [avatars, setAvatars] = useState(generate());
  const [selected, setSelected] = useState(null);

  return (
    <userContext.Provider value={{ options, setOptions,avatars,setAvatars,selected, setSelected }}>
      {children}
    </userContext.Provider>
  );
}
