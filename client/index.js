import { Form } from './components'

const HTMLRoot = document.querySelector('#root')

const props = {
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

function render() {
  HTMLRoot.innerHTML = Form(props.Form)
}
render()
