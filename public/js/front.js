console.log('IT`S FRONT JS')
const container = document.querySelector('.container')
const general = document.querySelector('.general')
//MODEL

//CONTROLLER
const methodPost = async (event) => {
   event.preventDefault();// Зупиняємо перезагрузку після відправки данних

   // Створюємо об'єкт формдата яка буде зчитувати дані в формі
   const formData = new FormData(event.target);

   //Отримуємо значення полей форми з допомогою метода get
   const title = formData.get('title');
   const text = formData.get('text');

   const response = await axios.post('/articles', { title, text });

   general.innerHTML = `
      <p>Назва:${res.data.title}</p>
      <p>Текст:${res.data.text}</p>
   `
}

const methodGet = async () => {
   const result = await axios.get('/articles');
   result.data.forEach(item => {
      container.innerHTML = `
      <form>
         <input type = "text" placeholder ="Введіть Назву""${item.title}" ></input><br>
         <input type = "text" placeholder ="Введіть Текст""${item.text}" ></input><br>
         <input type = "submit"></input>
      </form>
      <div class ="general"></div>
      `
   }).join('')

}

//VIEW

//RUNNER
methodPost()
methodGet()
