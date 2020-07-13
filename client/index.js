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
}

render()
