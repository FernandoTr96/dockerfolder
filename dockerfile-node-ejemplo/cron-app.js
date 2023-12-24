// Esta app sera dockerizada

const cron = require('node-cron');

cron.schedule('1-59 * * * * *', () => {
    console.log("Tarea programada en proceso...")
})

console.log('Inicio');