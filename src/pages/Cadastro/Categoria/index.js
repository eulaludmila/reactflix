import React, {useState}from 'react';
import PageDefault from '../../PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


const CadastroCategoria = () => {
    const [categorias, setCategorias] = useState([]);
    const valoresIniciais = {
      nome:'',
      descricao:'',
      cor:'#ffffff'
    }
    const [dadosFormulario, setDadosFormulario] = useState(valoresIniciais);


    function handleSubmit(e){
      e.preventDefault();
      setDadosFormulario(valoresIniciais)
      setCategorias([...categorias, dadosFormulario]);
    }

    function handleChangeInput(target){

      const {name, value} = target;

      setDadosFormulario({
        ...dadosFormulario,
        [name]:value
      })
    }

    return (
        <PageDefault>
        <h1>Cadastro de Categoria</h1>
  
        <form onSubmit={handleSubmit}>
  
         <FormField label="Nome da Categoria:" value={dadosFormulario.nome} onChange={(e) => handleChangeInput(e.target)} name="nome" type="text"/>
         
         <FormField type="textarea" label="Descrição:"  name="descricao" value={dadosFormulario.descricao} onChange={(e) => handleChangeInput(e.target)} />
  
          <FormField type="color" label="Cor:"  name="cor" value={dadosFormulario.cor} onChange={(e) => handleChangeInput(e.target)} />
  
          <button type="submit">
            Cadastrar
          </button>
        </form>
        
        <ul>
          {categorias.map((categoria, index) => (
            <li key={`${categoria}${index}`}>{categoria.nome}</li>
          ))}
        </ul>
  
  
        <Link to="/">
          Ir para home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;