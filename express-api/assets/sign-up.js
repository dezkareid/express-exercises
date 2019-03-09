/* global fetch */
function registerUser (user) {
  return fetch('http://localhost:3000/api/users', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
}

function onSubmit (event) {
  event.preventDefault()

  const elementName = document.getElementById('name')
  const elementEmail = document.getElementById('email')
  const elementPassword = document.getElementById('password')
  const user = {
    name: elementName.value,
    email: elementEmail.value,
    password: elementPassword.value
  }
  registerUser(user)
    .then(() => console.log('Usuario registrado'))
    .catch(console.error)
}

window.addEventListener('load', function () {
  const form = document.getElementById('sign-up-form')
  form.addEventListener('submit', onSubmit)
})
