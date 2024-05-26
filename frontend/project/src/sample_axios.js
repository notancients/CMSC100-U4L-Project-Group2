const axios = require("axios");

const fetch_data = async () => {
    const db_product_data = await axios.get("http://localhost:3001/api/get-all-products")
    .then(response => {
        console.log(response.data.data);
    }).catch( error => {console.log(error)});
}

fetch_data();