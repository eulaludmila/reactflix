/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContainerCategorias, Categoria, Spinner } from './styles';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import config from '../../../config';

// Custom Hooks
import useForm from '../../../hooks/userForm';

const CadastroCategoria = () => {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };
  const [categorias, setCategorias] = useState([]);

  const { handleChangeInput, values, handleCleanInput } = useForm(valoresIniciais, categorias, setCategorias);

  useEffect(() => {
    fetch(`${config.URL_BACKEND}/categorias`)

      .then(async (res) => {
        const resposta = await res.json();
        setCategorias(...categorias, resposta);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3333/categorias'
      : 'https://euflix.herokuapp.com/categorias';

    await fetch(URL, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify(values),
    })

      .then(() => {
        handleCleanInput();
        setCategorias([...categorias, values]);
      });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField label="Nome da Categoria:" value={values.nome} onChange={(e) => handleChangeInput(e.target)} name="nome" type="text" />

        <FormField as="textarea" type="textarea" label="Descrição:" name="descricao" value={values.descricao} onChange={(e) => handleChangeInput(e.target)} />

        <FormField type="color" label="Cor:" name="cor" value={values.cor} onChange={(e) => handleChangeInput(e.target)} />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <ContainerCategorias>
        {categorias.map((categoria) => (

          <Categoria cor={categoria.cor} key={categoria.id}>{categoria.nome}</Categoria>
        ))}
      </ContainerCategorias>

      {categorias.lenth === 0
        && (
          <Spinner />
        )}

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
};

export default CadastroCategoria;
