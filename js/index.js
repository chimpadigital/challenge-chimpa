

// Submit
document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = new FormData(e.target)

  
  alert(`Nombre: ${form.get('name')} \n Email: ${form.get('email')} \n Asunto: ${form.get('subject')} \n Mensaje: ${form.get('message')}`)
  
  document.querySelector('.alert').classList.remove('d-none')
  
  document.querySelector("#form").reset();
});



document.querySelector('.alert').addEventListener("click", (e) => {
  document.querySelector('.alert').classList.add('d-none')
})


