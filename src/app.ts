const form = document.querySelector('form')! as HTMLFormElement
const addressInput = document.getElementById('address')! as HTMLInputElement


function searchAddressHandler(e: Event): void {
    e.preventDefault()
    const enteredAddress = addressInput.value

    //use google api
}