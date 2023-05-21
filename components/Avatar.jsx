import { BigHead } from "@bigheads/core";
import { getRandomOptions, selectRandomValue } from "../src/utils/generateAvatar";
import { useState } from "react";
import Pencil from "./Pencil";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../src/context/UserContext";

export const Avatar = () => {
  const {options,setOptions} = useUserContext()
  // console.log(options)
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/avatar")}
      className="avatar cursor-pointer flex flex-col"
      style={{
        position: "absolute",
        right: 38,
        top: 25,
        alignItems: "flex-end",
      }}
    >
      <BigHead {...options} clothing={selectRandomValue(['shirt', 'dressShirt',  'dress'])} body="chest"/>
      <div style={{ marginTop: -12 ,width:"18px"}}>
        <Pencil className="w-6" />
      </div>
    </div>
  );
};
