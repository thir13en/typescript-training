const form  = document.querySelector('form')!;
const addrInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addrInput.value;
}

form.addEventListener('submit', searchAddressHandler);
