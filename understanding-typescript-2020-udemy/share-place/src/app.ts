import axios from 'axios';


const form  = document.querySelector('form')!;
// const addrInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
    event.preventDefault();
    // const enteredAddress = addrInput.value;
    // TODO: activate billing account

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.GOOGLE_API_KEY}`)
        .then(console.log);
}

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.GOOGLE_API_KEY}`)
    .then(console.log);

form.addEventListener('submit', searchAddressHandler);
