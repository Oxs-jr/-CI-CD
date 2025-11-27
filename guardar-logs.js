const fs = require('fs');
const { registrarLog } = require('./app');

// Redirigir logs a un archivo
const logStream = fs.createWriteStream('app.log', { flags: 'a' });

console.log = function(message) {
    logStream.write(`[${new Date().toISOString()}] [INFO] ${message}\n`);
};

console.error = function(message) {
    logStream.write(`[${new Date().toISOString()}] [ERROR] ${message}\n`);
};

console.warn = function(message) {
    logStream.write(`[${new Date().toISOString()}] [WARNING] ${message}\n`);
};

// Simular logs
setInterval(() => {
    const tipos = ["log", "error", "warn"];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const mensajes = {
        log: "La aplicación está funcionando correctamente.",
        error: "Error crítico: ¡La base de datos no responde!",
        warn: "Advertencia: Alto uso de memoria."
    };
    console[tipo](mensajes[tipo]);
}, 3000);

console.log("📝 Guardando logs en app.log...");
