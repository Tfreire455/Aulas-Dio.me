const offset = 0, limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


// fetchAPI
// O fetch nos retorna uma Promise | Promise é a promessa de um resultado
fetch(url)
    .then((response) => response.json()) // o .then() nos retorna a resposta da Promise caso o fetch() de certo
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error)) // Nos retorna uma mensagem de erro caso o fetch() não de certo
    // .finally(() => console.log("Finally")) ||| Finaliza o processo mesmo se de certo ou errado

/*  try {
      faça algo
  } catch {
      Caso de erro
  } finally {
      Finaliza o processo mesmo se de certo ou errado
  } */





let x = 10 + 10;
console.log(x)
