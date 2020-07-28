import axios from 'axios';


const form  = document.querySelector('form')!;
const addrInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyBK-TpU34k-7qt9eHp_JdhnU_Krgi5sLEA';

function searchAddressHandler(event: Event) {
    event.preventDefault();
    const enteredAddress = addrInput.value;

    axios.get('');
}

form.addEventListener('submit', searchAddressHandler);
