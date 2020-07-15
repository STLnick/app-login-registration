export default (divs) => {
  return divs.map(({ label, placeholder = label, type = 'text' }) => {
    return `
    <div>
      <label class="screen-reader-text" for="${label.toLowerCase()}">${label}</label>
      <input type="${type}" class="regInput" id="${label.toLowerCase()}" placeholder="${placeholder}" />
    </div>
    `
  }).join('')
}
