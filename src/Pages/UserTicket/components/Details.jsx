import React from "react";
import toSentenceCase from "../../../utils/toSentenceCase";

export default function Details({ category, value }) {
  return (
    <li class="flex space-x-3 leading-tight">
      <span className="font-bold sm:text-xl">{toSentenceCase(category)}</span>
      <span className="sm:text-xl">{value}</span>
    </li>
  );
}
