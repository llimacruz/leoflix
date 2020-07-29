import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor // nome: 'valor'
    });
  }

  function handleChange(infos) {
    // const { getAttribute, value } = infos.target;
    setValue(
      infos.target.getAttribute('name'),
      infos.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(valoresIniciais);
      }}>

        <FormField
          type="text"
          name="nome"
          label="Nome da categoria"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição da categoria"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor da categoria"
          value={values.cor}
          onChange={handleChange}
        />

        <div>
          <button>
            Cadastrar
          </button>
        </div>
      </form>

      <ul>
        {categorias.map((categoria, ix) => {
          return (
            <li key={`${categoria}${ix}`}>{categoria.nome}</li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
