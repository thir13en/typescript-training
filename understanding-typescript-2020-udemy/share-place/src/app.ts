import axios from 'axios';


const form  = document.querySelector('form')!;
// const addrInput = document.getElementById('address')! as HTMLInputElement;

// TODO figure out how to obtain environment variables in this execution context
console.log(process.env.TS_TEST);

function searchAddressHandler(event: Event) {
    event.preventDefault();
    // const enteredAddress = addrInput.value;

    // TODO: add notes on geocoding Google API
    axios.get('');
}

form.addEventListener('submit', searchAddressHandler);
