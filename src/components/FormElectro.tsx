import React, { useState } from "react";

interface FormElectroProps {
  onSubmit: (data: any) => void;
}

const FormElectro: React.FC<FormElectroProps> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [dni, setDni] = useState("");
  const [sexo, setSexo] = useState("");
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [hta, setHta] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [dislipemia, setDislipemia] = useState("");
  const [fumador, setFumador] = useState("");
  const [creatinina, setCreatinina] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = {
      name,
      apellido,
      edad,
      dni,
      sexo,
      peso,
      altura,
      hta,
      diabetes,
      dislipemia,
      fumador,
      creatinina,
    };
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="First name"
        type="text"
        name="name"
        required
      />
      <input
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
        placeholder="Last name"
        type="text"
        name="apellido"
        required
      />
      <input
        value={edad}
        onChange={(e) => setEdad(e.target.value)}
        placeholder="Age"
        type="number"
        name="edad"
        required
      />
      <input
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        placeholder="DNI"
        type="text"
        name="dni"
        required
      />
      <input
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}
        placeholder="Gender"
        type="text"
        name="sexo"
        required
      />
      <input
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
        placeholder="Weight"
        type="number"
        name="peso"
        required
      />
      <input
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
        placeholder="Height"
        type="number"
        name="altura"
        required
      />
      <input
        value={hta}
        onChange={(e) => setHta(e.target.value)}
        placeholder="Hypertension"
        type="text"
        name="hta"
        required
      />
      <input
        value={diabetes}
        onChange={(e) => setDiabetes(e.target.value)}
        placeholder="Diabetes"
        type="text"
        name="diabetes"
        required
      />
      <input
        value={dislipemia}
        onChange={(e) => setDislipemia(e.target.value)}
        placeholder="Dyslipidemia"
        type="text"
        name="dislipemia"
        required
      />
      <input
        value={fumador}
        onChange={(e) => setFumador(e.target.value)}
        placeholder="Smoker"
        type="text"
        name="fumador"
        required
      />
      <input
        value={creatinina}
        onChange={(e) => setCreatinina(e.target.value)}
        placeholder="Creatinine"
        type="number"
        name="creatinina"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormElectro;
