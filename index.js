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


const saludar = new Promise((resolve, reject) => {
  // if(nombre === 'pedro') {
  //   resolve('Se resuelve la promesa, Holi')
  // } else {
  //   reject('Ha fallado la promesa')
  // }
  setTimeout(() => {
    resolve('Se resuelve la promesa, Holi')
    reject('Ha fallado la promesa')
  }, 4000);
})

saludar
  .then((resultado) => {
    console.log(resultado)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => console.log('final'))


const status = new Promise((resolve, reject) => {
  const valor = 5
  if (valor >= 5) {
    resolve('Es mayor a 5')
  } else {
    reject('Es menor a 5')
  }
})

status
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error))



