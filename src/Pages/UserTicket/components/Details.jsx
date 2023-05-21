import React from "react";
import toSentenceCase from "../../../utils/toSentenceCase";

export default function Details({ category, value,className ,sentenceCase=true}) {
  return (
    <li className={`flex space-x-3 leading-tight ${className}`} >
      <span className="font-bold sm:text-xl">{sentenceCase ? toSentenceCase(category) : category}</span>
      <span className="sm:text-xl">{value}</span>
    </li>
  );
}
