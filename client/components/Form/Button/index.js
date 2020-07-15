import './Button.css'

export default (buttons) => {
  return buttons.map(({ id, text, type = 'button' }) => {
    return `<button type="${type}" id="${id}">${text}</button>`
  }).join('')
}
