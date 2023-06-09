import React from "react";
import dummyData from "../data/dummyData";
import Details from "./Details";
import { Avatar } from "../../../../components/Avatar";
import Welcome from "../../../../components/Welcome";
import Logo from "../../../assets/Logo.png";
import DottedLine from "../../../../components/DottedLine";
import UserBarcode from "../../../../components/UserBarcode";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";

export default function Card() {
  const data = useParams() || null;
  const { id } = data;
  const userDetails = JSON.parse(atob(id));
  const { setUser } = useUserContext();

  return (
    <div className="w-[90%] max-w-md relative">
      <div className="absolute inset-0 w-full h-20 bg-black top-[-41px] z-0 " />
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-2xl shadow px-8 py-12 relative">
        <img
          src={Logo}
          alt="logo"
          className="w-full absolute top-[-90px] sm:top-[-130px] z-10"
        />
        <Avatar />
        <ul role="list" className="space-y-5 my-4 mt-9 self-start">
          <Details key={"name"} category={"name"} value={userDetails["name"]} />
          <Details
            className="mt-4"
            key={"email"}
            category={"email"}
            value={userDetails["email"]}
          />
          <Details
            key={"contact"}
            category={"contact"}
            value={userDetails["contact"]}
          />
          <Details
            sentenceCase={false}
            key={"id"}
            category={"DevSoc ID"}
            value={userDetails["id"]}
          />
        </ul>
        <Welcome className="w-40 sm:w-52 mt-4" />
        <div className="flex relative mt-2 justify-center">
          <DottedLine className="w-full" />
        </div>
        <div className="mt-3 flex flex-col items-center">
          <UserBarcode />
          <p>Member</p>
        </div>
      </div>
      <div class="w-14 h-7 absolute top-[65%] sm:top-[67%] left-[-0.9rem]  bg-[#396afc] rounded-b-full transform -rotate-90" />
      <div class="w-14 h-7 absolute top-[65%] sm:top-[67%] right-[-0.9rem]  bg-[#396afc] rounded-b-full transform rotate-90" />
    </div>
  );
}
