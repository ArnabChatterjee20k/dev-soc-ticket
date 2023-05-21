import React from "react";
import dummyData from "../data/dummyData";
import Details from "./Details";
import { Avatar } from "../../../../components/Avatar";
import Welcome from "../../../../components/Welcome";
import Logo from "../../../assets/Logo.png";
import DottedLine from "../../../../components/DottedLine";
import UserBarcode from "../../../../components/UserBarcode";
import { useParams } from "react-router-dom";
export default function Card() {
  const data = useParams() || null;
  const { id } = data;
  const userDetails = JSON.parse(atob(id));
  console.log(userDetails);

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
        <ul role="list" className="space-y-5 my-4 self-start">
          <Details key={"name"} category={"name"} value={userDetails["name"]} />
          <Details
            key={"email"}
            category={"email"}
            value={userDetails["email"]}
          />
          <Details
            key={"contact"}
            category={"contact"}
            value={userDetails["contact"]}
          />
        </ul>
        <Welcome className="w-40 sm:w-52 mt-4" />
        <div className="flex relative mt-2">
          {/* <div class="w-14 h-7 absolute left-[-3rem] bg-gray-300 rounded-b-full transform -rotate-90" /> */}
          <DottedLine className="w-full" />
          {/* <div class="w-14 h-7 absolute right-0 bg-gray-300 rounded-b-full transform rotate-90" /> */}
        </div>
        <div className="mt-3 flex flex-col items-center">
          <UserBarcode />
          <p>Member</p>
        </div>
      </div>
    </div>
  );
}
