'use client';

import Button from "@/components/Button";
import FormInput from "@/components/FormInput";

export default function Home() {
  const handleClick = () => {};

  const handleChange = () => {};

  return (
    <main>
      <FormInput label="Nome" value="Maria" onChange={handleChange} />
      <Button text="ok" onClick={handleClick} />
    </main>
  );
}
