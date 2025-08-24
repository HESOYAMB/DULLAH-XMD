const fs = require('fs-extra');
const path = require("path");

const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;

module.exports = {
    session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA61Va4+iSBT9L/VVM/IGTTpZXioI7YNWwM1+KKHAUl4WhYoT//sGu3umk5md6U2GT0U97j3n1jm3voKixDWaoRaMvoKK4DOkqBvStkJgBLQmSRABfRBDCsEIKIYg+0TiTbJuhZVvMeR5dY581VJbh8cqM7bL2eC6s6RCeQL3PqiaXYajXwQMGWXrbo2Jy0fxUkEDtdDRcltenGiVTtTr0Z0O6TPTrAT9+ATuXUSICS5Ss9qjHBGYzVC7gJh8Dj4yZrwqbVcy3O+4pRavjGeE1OVGNaVAkvUAVcXhBR8W4fryOfjazHZ2FecwDpeViqS7z7aCY8O3w3gZ6KcmZuO9K7z4Tbp8hV/jtECxFaOCYtp+uu6pm0mOHc4TkzWD660iwm4wV8hNk2Y6Gc5ux6Vq7iebYJIvPwfcQkto7W6Ne1i7/jyCituQnako4WnlhQy/kHtJVuOJe55EH4EvyLtWjv+n7oxuxFxmplFzvcT+9HlOC3q0Amyy1RmrWDfPK+O4kzN3bX0OftXbzOXrwdhQ6GdOwBBluAxs7bA4Ia/oSTnvep5vzW32JfwOH9KG/AqlxcvHuGh7hpdsNbziUsfWzN3kehHMXJtkweZ5KLfyKrwt/Wmlza+TbX4pV6uDEI/Z2AzmljYXjczaTI02KZKj7GiBqy2fHoyOqLViMGLvfUBQimtKIMVl0c3xQh/A+OyhiCD6qC4IGurrOTOvy+eJVXlGYdD5Xrau8MTR8YujvQjSZH6bLHaG8gT6oCJlhOoaxVNc05K0LqprmKIajP5+XFTHmaC8pMjGMRgBjufFIccwnMKzf9VfLntIa1hVXwpEQR8kpMxdBEaUNKgPHgd0geUYQTfHkikZjKKopi5o7JhhNE4bj3m9Y5i/Jn3BOaopzCswYmVRHA5FTuLu/T+DQ1RUSdBlXWA4ntNZQxRFbqzzY4ZjdE5Wxd/gEP4UDmE85hXVUFROY0RBk8eSOtQNU1MUXTQZTfo1Dlm8/9MHBbrSVzs9RMD2QYJJTddFU2UljN+99r4Io6hsCuq1RaR3A0TA6MM0ohQXad0xawpIoj0+I73jAUYJzGr0TXeIoPidy1sv1cu4s4PNbhw/XLigw94F+qE2I5b5sTwF7HYDNbA80AfZ45Ai8BLDyxwnSUO5O9VN37+h7YLHiEKc1Z24nAVXh6ppznvCKVpPJmqUqnqqgu/s3s376o5p5uTDZV543LROFkO8pT3RHgyYVsE9Vb/kp9zTjNId+If100+CgBHYqosBplGZsttULXMz5PbZrZqmTdXbJtyFHsJaCOcX8yW4kUWP14+bPHFsuh4z0yN3uh7Em8HSZ6/1KnqOplXjGbNMS5+6bDE64wh9TEbO6Fy7K1TvsmqzP+JEbZ0BlrYntfBqsZQ4wc9yZzEQ8M2E3GCerA+zhPWzIpgFUrQ0iVZwe38lxlwMw2qaTxVoG29t5dHWsrfnBL85Hj9+E4we3fntfn57j6/AO7kx9/6HGG/9/r8ewJXoiee1XTF0L09vgzDfJY2XDIbu2Tqnam2fqmO6lIwFW7Lg3um+yiBNSpKDEajzHQR9QMqmE69VJOUvMukqY5npK+0M1lT9boifeEwUX3ctSFlNYb0HI1DkvLbrxN2qVeVRSN/tBdTus08huP8L/h7s1RAJAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME : process.env.OWNER_NAME || "AXIS",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255592002831",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT_NAME : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.IMAGE_MENU || 'https://files.catbox.moe/3v4ezj.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY,
    WARN_COUNT : process.env.WARN_COUNT || '3',
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
    AUTO_REACT : process.env.AUTO_REACT || 'no',
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
    AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
    AUTO_BIO : process.env.AUTO_BIO || 'yes',
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'no',
    AUTO_STICKER : process.env.AUTO_STICKER || 'no',
    WELCOME_MESSAGE : process.env.WELCOME_MESSAGE || 'yes',
    GOODBYE_MESSAGE : process.env.GOODBYE_MESSAGE || 'yes',
    ANTIBAD: process.env.ANTIBAD || 'no',

    RMBG_KEY: "MLt7fM4Sqv63U9FAt6FdPKRL",

    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
        : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway"
};

let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`File updated: ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
