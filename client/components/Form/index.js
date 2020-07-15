import './Form.css'

import renderDivs from './Divs'
import renderButtons from './Button'

export default ({ divs, buttons }) => `
  <form>
    ${renderDivs(divs)}
    ${renderButtons(buttons)}
  </form>
`
