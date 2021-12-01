const axios = require('axios').default;
axios
    .get('https://www.paypal.com/ru/home')
    .then((response)=>{
        console.log(response);
    })
    .catch((error)=>{
        console.log(error);
    })
