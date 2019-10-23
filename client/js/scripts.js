const input = document.querySelector('input[type="text"]')
const select = document.querySelector('select')
if (input) input.focus()
if (select) select.focus()

document.onkeypress = function onKeyPress () {
  if (document.querySelector('.any-key-advance')) {
    document.querySelector('form').submit();
  }
}
