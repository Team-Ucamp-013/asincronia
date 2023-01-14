console.log('holi')

// function hola(nombre) { console.log('hola', nombre) }

// const hola = (nombre) => console.log('hola', nombre)

// hola('fredo')


// const saludar = (nombre) => {
//   setTimeout(() => {
//     callback(nombre.toUpperCase())
//   }, 4000);
//   console.log('final')
// }

// const callback = (nombre) => {
//   console.log('Hola ' + nombre)
// }
// saludar('Dany')


// const saludar = new Promise((resolve, reject) => {
//   // if(nombre === 'pedro') {
//   //   resolve('Se resuelve la promesa, Holi')
//   // } else {
//   //   reject('Ha fallado la promesa')
//   // }
//   setTimeout(() => {
//     resolve('Se resuelve la promesa, Holi')
//     reject('Ha fallado la promesa')
//   }, 4000);
// })

// saludar
//   .then((resultado) => {
//     console.log(resultado)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
//   .finally(() => console.log('final'))


// const status = new Promise((resolve, reject) => {
//   const valor = 5
//   if (valor >= 5) {
//     resolve('Es mayor a 5')
//   } else {
//     reject('Es menor a 5')
//   }
// })

// status
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error))

let containerList = document.getElementById('list')
console.log(containerList)
const render = (data) => {
  data.forEach(element => {
    containerList.innerHTML += `
      <div>
        <img src="${element.image}" />
        <h2>
          ${element.name}
        </h2>
      </div>
    `

  });
}

const getData = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const { results } = await response.json()
  console.log(results)
  render(results)
}
// const getData = () => {
//   fetch('https://rickandmortyapi.com/api/character')
//     .then(response => response.json())
//     .then(result => {
//       console.log(result)
//       render(result.results)
//     })
//   // const characters =  response.json()
//   // console.log(characters.results)
// }

getData()





function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
  // tu código va aquí
  await sleep(500)
  let result = '';
  s.split('').forEach(letra => {
    if (letra === letra.toUpperCase()) {
      result += letra
    }
  })
  return result;
}

uppercaseString("eDwArD").then(console.log);

