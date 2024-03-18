# Zyat

A Node.js module for calculating properties related to the Moon.

## Installation

You can install this module via npm: `npm install zyat`

## Usage

```javascript
const lunarCalc = require('lunar-calc');

// Get current lunar phase
lunarCalc.getLunarPhase()
  .then(phase => console.log('Current lunar phase:', phase))
  .catch(err => console.error('Error:', err));

// Get approximate distance of the Moon from Earth in kilometers
const distance = lunarCalc.getMoonDistance();
console.log('Approximate distance from Earth:', distance, 'kilometers');

// Get approximate illumination percentage of the Moon
const illumination = lunarCalc.getMoonIllumination();
console.log('Approximate illumination:', illumination * 100, '%');
```


