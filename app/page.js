import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl text-white bg-black w-screen h-screen flex justify-center align-middle pt-10">
        <Link href="/folder1">click here</Link>
      </h1>

      <h1 className="text-white text-2xl">Documention </h1>
      <br/> <br/>

      <ol>
        <li>intercepting routing mane oi folder k override kora, </li>
        <li>ai project e folder1,folder2 create korci ai intercept ta clear howar jonno</li>
        <li>folder1 e link ase folder2 te navigate howar, jokhon click kore navige hoy tokon take client navigate bola hoy, hard refresh dile seita ar client side thake na</li>
        <li>akhon kono folder ba path k intercep korar jonno ba override korar jonno, oi folder er similar path ( ./ ) e dotbraket kore oi folder er same name dite hobe </li>
        <li>and tar modde akta page.js thakbe oi khane override mane ja dekahate chai ta code korte hobe</li>
        <li>finnaly folder1 page theke jokon click kore folder2 page e navigate hobo, tokon ai intercept page er content dekte parbo, but original folder2 er file show korbe na</li>
        <li>er jonno hard refresh dile folder2 te , thaole abar intercept er sob content gayeb hoye jabe and main folder er sob content show korbe</li>
      </ol>
    </div>
  );
};

export default page;
