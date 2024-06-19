
async function getCoordsForAddress(address) {
    return  {
        lat: 40.7484474,
        lng: -73.9871516
    };
}


// const axios = require('axios');

// const HttpError = require('../models/http-error');

// const getCoordsForAddress = async (address) => {

//     const params = {
//         auth: 'your auth code',
//         locate: 'Stora Torget 1, 582 19 Linkoping',
//         json: '1'
//     }

//     const response = await axios.get('https://geocode.xyz', { params })
//         .then(response => {
//             console.log(response.data);
//         }).catch(error => {
//             console.log(error);
//         }
//     );

//     const data = response.data;

//     // Check if no matches were found
//     if (!data || data.candidates.length === 0) {
//         const error = new HttpError(
//             'Could not find location for the specified address.',
//             422
//         );
//         throw error;
//     }

//     const coordinates = {
//         lat: data.latt,
//         lng: data.longt,
//     };

//     return {
//         coordinates
//     };
// };

module.exports = getCoordsForAddress;