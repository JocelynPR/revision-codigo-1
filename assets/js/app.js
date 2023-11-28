const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('name');
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //se agrega async
  $n.textContent = 'cargando...';
  try{  //se agrega bloque try y catch
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  //se agrega const data
  console.log(data);   //se agrega console.log 
  $n.textContent = `${data.name}`;  // se cambian comillas por (``)
  $b.textContent = `${data.blog}`;   // se cambian comillas por (``)
  $l.textContent = `${data.location}`;  // se cambian comillas por (``)
  }catch(err){ 
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;  // se agrega (;)
}

displayUser('stolinski');