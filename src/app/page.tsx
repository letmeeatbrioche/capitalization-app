"use client"
import { Form } from "../components";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState('');
  return (
    <>
      <div>
        <h1 className="header text-8xl text-center font-black text-[#E4572E]">CAPi</h1>
      </div>
      <Form />
    </>
  )
}



