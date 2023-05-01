console.log('IT`S FRONT JS')
const general = document.querySelector('.general')
const name_inp = document.querySelector('.name_inp')
const text_inp = document.querySelector('.text_inp')
const submit_but = document.querySelector('.submit_but')
//MODEL

//CONTROLLER
const run = async (name, text) => {
   const arrInfo = await axios.post('/ajax', { name: name, text: text })
   renderPage(arrInfo)
}
//VIEW
const renderPage = async (arrInfo) => {
   general.innerHTML = ''
   arrInfo.data.forEach(element => {
      general.innerHTML += `<div>${element.name}${element.text}</div>`
   })
}
//RUNNER

submit_but.addEventListener('click', (event) => {
   event.preventDefault();
   run(name_inp.value, text_inp.value)
})