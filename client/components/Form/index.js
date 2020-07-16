import './Form.css'

import renderDivs from './Divs'
import renderButtons from './Button'

export default ({ divs, buttons }) => `
  <form class="flex-col-align--center">
    ${renderDivs(divs)}
    ${renderButtons(buttons)}
  </form>
`
