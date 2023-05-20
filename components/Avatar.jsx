import { BigHead } from "@bigheads/core";

export const Avatar = () => (
  <div className="avatar" style={{  position: "absolute", right: 38, top: 7 }}>
    <BigHead
      accessory="shades"
      body="chest"
      clothing="tankTop"
      clothingColor="black"
      eyebrows="angry"
      eyes="wink"
      facialHair="mediumBeard"
      graphic="vue"
      hair="short"
      hairColor="black"
      hat="none"
      hatColor="green"
      lashes="false"
      lipColor="purple"
      mask="true"
      faceMask="true"
      mouth="open"
      skinTone="brown"
    />
  </div>
);
