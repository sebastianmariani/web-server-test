console.log('client side javascript is loaded!')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherform.addEventListener('submit' , (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.innerHTML = 'Loading...'
    messageTwo.innerHTML = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.innerHTML = data.error
            } else {
                messageOne.innerHTML = data.location
                messageTwo.innerHTML = data.forecast
            }
        })
    })
})