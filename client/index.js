import { Form } from './components'

const HTMLRoot = document.querySelector('#root')

const state = {
  Form: [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Your Name'
    },
    {
      type: 'email',
      label: 'Email'
    },
    {
      type: 'tel',
      label: 'Phone'
    }
  ]
}

function render(st) {
  HTMLRoot.innerHTML = Form(st.Form)
}

render(state)
