import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ContainerCategorias, Categoria, Spinner } from './styles';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

const CadastroCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#ffffff',
  };
  const [dadosFormulario, setDadosFormulario] = useState(valoresIniciais);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:3333/categorias'
      : 'https://euflix.herokuapp.com/categorias';

    fetch(URL)

      .then(async (res) => {
        const resposta = await res.json();
        setCategorias(...categorias, resposta);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setDadosFormulario(valoresIniciais);

    setCategorias([...categorias, dadosFormulario]);
  }

  function handleChangeInput(target) {
    const { name, value } = target;

    setDadosFormulario({
      ...dadosFormulario,
      [name]: value,
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField label="Nome da Categoria:" value={dadosFormulario.nome} onChange={(e) => handleChangeInput(e.target)} name="nome" type="text" />

        <FormField as="textarea" type="textarea" label="Descrição:" name="descricao" value={dadosFormulario.descricao} onChange={(e) => handleChangeInput(e.target)} />

        <FormField type="color" label="Cor:" name="cor" value={dadosFormulario.cor} onChange={(e) => handleChangeInput(e.target)} />

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
