const axios = require('axios');

async function getLunarPhase() {
    try {
        const response = await axios.get('https://api.farm.bot/api/ping');
        return response.data;
    } catch (error) {
        console.error('Error fetching lunar phase:', error);
        return null;
    }
}

function getMoonDistance() {
    // Simulate moon distance calculation
    return Math.floor(Math.random() * 100000) + 356000;
}

function getMoonIllumination() {
    // Simulate moon illumination calculation
    return Math.random();
}

module.exports = {
    getLunarPhase,
    getMoonDistance,
    getMoonIllumination
};
