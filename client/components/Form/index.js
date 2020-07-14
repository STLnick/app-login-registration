import './Form.css'

function render(divs) {
  return divs.reduce((acc, val) => {
    return acc + `
    <div>
      <label class="screen-reader-text" for="${val.label.toLowerCase()}">${val.label}</label>
      <input type="${val.type}" class="regInput" id="${val.label.toLowerCase()}" placeholder="${val.label}" />
    </div>
    `
  }, '')
}

export default (props) => `
  <form>
    ${render(props)}
  </form>
`

/* <form class="flex-col-align--center">
  <div class="regField">
    <label class="screen-reader-text" for="email">Email</label>
    <input type="email" class="regInput" id="email" placeholder="Email" />
  </div>
  <div class="regField">
    <label class="screen-reader-text" for="phone">Phone</label>
    <input type="tel" class="regInput" id="phone" placeholder="Phone" />
  </div>
  <div class="regField">
    <label class="screen-reader-text" for="name">Name</label>
    <input type="text" class="regInput" id="name" placeholder="Name" />
  </div>
  <button id="regBtn" type="submit">Register</button>
</form> */
