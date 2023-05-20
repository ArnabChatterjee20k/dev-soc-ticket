import React from "react";
import dummyData from "../data/dummyData";
import Details from "./Details";
import { Avatar } from "../../../../components/Avatar";
import Welcome from "../../../../components/Welcome";


export default function Card() {
  return (
    <div className="w-[90%] max-w-md flex flex-col items-center  bg-white border border-gray-200 rounded-2xl shadow p-8 relative mt-12">
      <Avatar/>
      <ul role="list" className="space-y-5 my-4 self-start">
        {Object.keys(dummyData).map((key) => {
          return <Details key={key} category={key} value={dummyData[key]}/>
        })}
      </ul>
      <Welcome className="w-40 sm:w-52 mt-6"/>
    </div>
  );
}
