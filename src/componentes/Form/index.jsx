import DropDown from "../DropDown";
import TextField from "../TextField";
import "./Form.css";

const Form = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Desing',
    'Mobile',
    'Inovação e Gestão'

  ]

  return (
    <section className="formClass">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropDown label="Times" itens={times}/>
      </form>
    </section>
  );
};

export default Form;
