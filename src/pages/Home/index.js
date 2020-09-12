import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriasRepository from '../../repositories/categorias';
import PageDefault from '../PageDefault';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriaVideos) => {
        setDadosIniciais(categoriaVideos);
      })
      .catch((err) => {
        alert(err);
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
      
    </PageDefault>
  );
}

export default Home;
