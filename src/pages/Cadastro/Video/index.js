import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import useForm from '../../../hooks/userForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChangeInput, values } = useForm({
    titulo: '',
    url: 'https://www.youtube.com/watch?v=7Mo932dwAZA',
    categoriaId: 'Front-End',
  });

  const handleCadastrar = (e) => {
    e.preventDefault();
    videosRepository.create({
      titulo: values.titulo,
      url: values.url,
      categoriaId: 1,
    })
      .then(() => {
        history.push('/');
      });
  };

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleCadastrar}>
        <FormField label="Título do Vídeo:" value={values.titulo} onChange={(e) => handleChangeInput(e.target)} name="titulo" type="text" />

        <FormField label="URL:" value={values.url} onChange={(e) => handleChangeInput(e.target)} name="url" type="text" />

        <FormField label="Categorias:" value={values.categoriaId} onChange={(e) => handleChangeInput(e.target)} name="titulo" type="text" />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>
      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
