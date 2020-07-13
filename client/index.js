import { Title, Email, Phone, Name, RegUsername, RegPassword, SubmitButton, Header, LoginUsername, LoginPassword, LoginButton } from './components'

function render() {
  document.querySelector('#root').innerHTML = `
    ${Title()}
    <form class="reg-form">
      ${Email()}
      ${Phone()}
      ${Name()}
      ${RegUsername()}
      ${RegPassword()}
      ${SubmitButton()}
    </form>
    <form class="login-form">
      ${Header()}
      ${LoginUsername()}
      ${LoginPassword()}
      ${LoginButton()}
    </form>
  `

  const regForm = document.querySelector('.reg-form')
  const regInputs = {
    email: regForm.querySelector('#email'),
    phone: regForm.querySelector('#phone'),
    name: regForm.querySelector('#name'),
    username: regForm.querySelector('#username'),
    password: regForm.querySelector('#password')
  }
  const loginForm = document.querySelector('.login-form')
  const loginInputs = {
    username: loginForm.querySelector('#user-login-input'),
    password: loginForm.querySelector('#password-login-input')
  }

  const users = []

  const clearInputs = (inputs) => {
    for (const input in inputs) {
      inputs[input].value = ''
    }
  }

  /* REGISTER ==================== */
  regForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // Grab values for new user
    const newUser = {
      email: regInputs.email.value,
      phone: regInputs.phone.value,
      name: regInputs.name.value,
      username: regInputs.username.value,
      password: regInputs.password.value
    }
    // Add new user to array
    users.push(newUser)
    // Clear input fields
    clearInputs(regInputs)
  })

  /* LOGIN ==================== */
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // Get username and password values
    const loginToCheck = {
      username: loginInputs.username.value,
      password: loginInputs.password.value
    }
    // Use findIndex to check if users[] contains that pairing
    const userIndex = users.findIndex(user => {
      return user.username === loginToCheck.username && user.password === loginToCheck.password
    })
    // Console log message if login successful/failed
    if (userIndex !== -1) { console.log('👍🏾') } else { console.log('👎🏾') }
    // Clear input fields
    clearInputs(loginInputs)
  })
}

render()
