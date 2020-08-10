import React, { useEffect, useState } from 'react';
// import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriaVideos) => {
        console.log(categoriaVideos);
        setDadosIniciais(categoriaVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <PageDefault paddingAll={0} style={{ background: '#141414' }}>

      {dadosIniciais.length >= 1 && (
        dadosIniciais.map((dados, index) => (

          index === 0
            ? (
              <div key={dados.id}>
                <BannerMain
                  videoTitle={dados.videos[0].titulo}
                  url={dados.videos[0].url}
                  videoDescription="Não entendeu ainda?"
                />

                <Carousel
                  ignoreFirstVideo
                  category={dados}
                />
              </div>
            )

            : (
              <Carousel
                key={dados.id}
                category={dados}
              />
            )
        ))
      )}

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Não entendeu ainda?"
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      /> */}

      {/* <Footer /> */}
    </PageDefault>
  );
}

export default Home;
