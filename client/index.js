import { Form } from './components'

const HTMLRoot = document.querySelector('#root')

const state = {
  Form: {
    divs: [
      {
        label: 'Name',
      },
      {
        label: 'Email',
        type: 'email'
      },
      {
        label: 'Phone',
        type: 'tel'
      }
    ],
    buttons: [
      {
        id: 'submit-btn',
        text: 'Submit',
        type: 'submit'
      },
      {
        id: 'login-btn',
        text: 'Login'
      }
    ]
  }
}

function render(st) {
  HTMLRoot.innerHTML = Form(st.Form)
}

render(state)
