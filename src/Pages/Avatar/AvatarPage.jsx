import React, { useCallback, useState, useRef, useEffect } from "react";
import { getRandomOptions, selectRandomValue } from "../../utils/generateAvatar";
import { BigHead } from "@bigheads/core";
import Logo from "../../assets/Logo.png";
import { useUserContext } from "../../context/UserContext";
import {useNavigate} from "react-router-dom"

function generate() {
  const initial = [];
  for (let index = 0; index < 10; index++) {
    initial.push(getRandomOptions());
  }
  return initial;
}

export default function AvatarPage() {
  const [avatars, setAvatars] = useState(generate());
  const intObserver = useRef();
  const hasNextPage = true;
  const navigate = useNavigate()
  const lastPaletteRef = useCallback((node) => {
    if (intObserver.current) intObserver.current.disconnect();

    intObserver.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasNextPage) {
        setAvatars((prevAvatars) => prevAvatars.concat(generate()));
      }
    });

    if (node) intObserver.current.observe(node);
  }, []);

  const {setOptions} = useUserContext()

  return (
    <section className="bg-[#edf2f4] p-2">
      <nav>
        <img src={Logo} alt="" className="w-32 sm:w-52" />
      </nav>
      <main className="w-full flex flex-wrap gap-3 items-center justify-evenly py-6">
        <div className="flex space-x-1 sm:flex-col items-center">
          <h2 className="text-3xl font-semibold">Choose</h2>
          <h2 className="text-3xl font-semibold">Your</h2>
          <h2 className="text-3xl font-semibold">Avatar</h2>
        </div>
        {avatars.map((data, index) => (
          <div
            onClick={()=>{
              setOptions(data)
              navigate(-1)
            }}
            key={index}
            className={`w-full max-w-[90%] sm:w-1/2 md:w-1/3 lg:w-1/4 relative cursor-pointer hover:bg-slate-300 rounded-lg`}
            ref={index === avatars.length - 3 ? lastPaletteRef : null}
          >
            <BigHead {...data} clothing={selectRandomValue(['shirt', 'dressShirt',  'dress'])} body="chest"/>
          </div>
        ))}
      </main>
    </section>
  );
}
