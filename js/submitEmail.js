const scriptURL = 'https://script.google.com/macros/s/AKfycbw2O0I-tQyJaDsaBJcwd5EPt3EtyDUNc2wZ3ItwsliB8p0LnzLrqDKBBSjPa1GEw836/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
