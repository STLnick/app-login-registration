const regForm = document.querySelector('.regForm')
const loginForm = document.querySelector('.login-form')

const users = []

regForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const newUser = {
    email: regForm.querySelector('#email').value,
    phone: regForm.querySelector('#phone').value,
    name: regForm.querySelector('#name').value,
    username: regForm.querySelector('#username').value,
    password: regForm.querySelector('#password').value
  }

  console.log(newUser) // TESTING
  users.push(newUser)
})

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  // Get username and password values
  const username = loginForm.querySelector('#user-login-input').value
  const pw = loginForm.querySelector('#password-login-input').value

  // Use findIndex to check if users[] contains that pairing
  const userIndex = users.findIndex(user => user.username === username && user.password === pw)
  console.log(userIndex)
  console.log('A user logged in!!!')
})
