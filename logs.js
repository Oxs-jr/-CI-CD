const { registrarLog } = require('./app');

// Simular logs cada 3 segundos
setInterval(() => {
    const tipos = ["info", "warning", "error"];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];
    const mensajes = {
        info: "La aplicación está funcionando correctamente.",
        warning: "Advertencia: Alto uso de memoria.",
        error: "Error crítico: ¡La base de datos no responde!"
    };
    registrarLog(mensajes[tipo], tipo);
}, 3000);

console.log("📞 Sistema de logs activado. Registrando cada 3 segundos...");
