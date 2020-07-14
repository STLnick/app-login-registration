import { Form } from './components'

function render() {
  document.querySelector('#root').innerHTML = `
    ${Form()}
  `
}
render()
