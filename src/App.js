import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{background:"#141414"}}>
      <Menu/>
      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo} url={dadosIniciais.categorias[0].videos[0].url} videoDescription={"Não entendeu ainda?"}/>

      <Carousel ignoreFirstVideo categoryColor={dadosIniciais.categorias[0].cor} category={dadosIniciais.categorias[0]}/>
      <Carousel ignoreFirstVideo categoryColor={dadosIniciais.categorias[1].cor}  category={dadosIniciais.categorias[1]}/>
      <Carousel ignoreFirstVideo categoryColor={dadosIniciais.categorias[2].cor}  category={dadosIniciais.categorias[2]}/>
      <Footer/>
    </div>
  );
}

export default App;
