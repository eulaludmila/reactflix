import config from '../config';

// Pegar todas as categorias com seus respequitivos vídeos
function create(dados) {
  console.log(dados);
  return fetch(`${config.URL_BACKEND}/videos`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(dados),
  })
    .then(async (resposta) => {

      console.log(resposta);
      if (resposta.ok) {
        const res = await resposta.json();
        return res;
      }

      throw new Error('Não foi possível fazer a conexão');
    });
}

export default {
  create,
};
