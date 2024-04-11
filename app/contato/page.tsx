"use client";
import { useState } from "react";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    cep: "",
  });

  const sendForm = () => {
   console.log(form)
  };

  const changeState = (type: string, value: string) => {
    setForm({
      ...form,
      [type]: value
    })
  };

  return (
    <section className="m-4">
      <header>
        <h1 className="text-4xl">Formulário de contato</h1>
      </header>
      <FormInput
        label="Nome"
        value={form.name}
        onChange={(event: any) => {
          changeState("name", event.target.value);
        }}
      />
      <FormInput
        label="Endereço"
        value={form.address}
        onChange={(event: any) => {
          changeState("address", event.target.value);
        }}
      />
      <FormInput
        label="Telefone"
        value={form.phone}
        onChange={(event: any) => {
          changeState("phone", event.target.value);
        }}
      />
      <FormInput
        label="CEP"
        value={form.cep}
        onChange={(event: any) => {
          changeState("cep", event.target.value);
        }}
      />
      <footer>
        <Button text="Enviar" onClick={sendForm} />
      </footer>
    </section>
  );
};

export default Contact;
