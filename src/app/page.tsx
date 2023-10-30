"use client"
import { Form } from "../components";
import { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState('');
  return (
    <div>
      <Form />
    </div>
  )
}



