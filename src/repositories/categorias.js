import config from '../config';

// Pegar todas as categorias com seus respequitivos vídeos
function getAllWithVideos() {
  return fetch(`${config.URL_BACKEND}/categorias?_embed=videos`)
    .then(async (resposta) => {
      if (resposta.ok) {
        const res = await resposta.json();
        return res;
      }

      throw new Error('Não foi possível fazer a conexão');
    });
}

export default {
  getAllWithVideos,
};
