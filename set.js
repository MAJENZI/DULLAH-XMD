const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VUa4+iSBT9K5v6qhl5iIhJJwsICsrLB6Cb/VBCiSivLgoBJ/73Ddo93cnMzvbyqajHvefce879DrI8LtECtWDyHRQ4vkKCuiVpCwQmQKqOR4RBH4SQQDABnnXVjK0d+97y4KmGp4ot2QocUemAtixlmPpwekmbxEm0F3Dvg6I6JHHwm4BMT00a4bxIW2sV7aspXL6up1O651y3bK3W+DXTtLwM91pLvYB7FxHGOM4ipTihFGGYLFBrwxh/DT5jmbOIT4NpSqo20ecusQQPujtqszKYq+IyvG1F2OZpP/gafMo8SO1Fcoxko0kCrEVsajS9zQ1nOQ1MvN0pgmioq+AwF5/wyzjKUKiFKCMxab9cd0r20zlfj0NfkeFgNqaviA8gmx9MNAzFcBUfxKgmzSukh18DLmw3kBr0/GvmnnuURDvs8KwnLjWl6HOeb7V4mo3pQbpoV8Fn4DZ+18rl/9T9os74aW/ZCy+Cnw/83DfXp3B1WUmt618XVm/HBoFkFqwzy78G/7wi9GAk5bIwq012PrVFjyiKgv3lVlnm68Zbbo8oa7QZk3/Ah6TCv0O5gTe63vnO7rLfWaOKl22nXjTRQqaT0ktfDVxzCY2O4WrFFdNbw54vzXqjFUaVZL5K6Y2ujuE5tDJhdSNzvzY566bLzsuD0QW1Wggm9L0PMIrikmBI4jx77AlCH8DwukYBRuRRXsD7vtksTtOBtb/hoVDODzC30h0qbSPeZKxGtY275CPzNN6+gD4ocB6gskThPC5JjlsDlSWMUAkmfz061ZHGKM0J0uOw8wHH8TTDcENmxP9ZfqtPkJSwKL5liIA+OOI8NRCYEFyhPng8kDhRVBlFlRiOVqiRJIisOBqOaF4VGE4cyh3F9Jl0E6eoJDAtwITmOZpjhxTD3f/ugww15KmfjjVL98ExxiXZZlWR5DB8F9f7IQyCvMrIus0CuVsgDCafthEhcRaVHbMqgzg4xVckdzzA5AiTEv0oNMIofOfyNjzkPOz6b7vKwtLdPeiwd4F+qs2E434uTwa728Dwlt/+MERdMfca6IPk+ZjlOJ6jaJYbUUN+2L3vDu4/cHdpQkRgnJRgAmStlWJrO1OW3iYNjNlMVCJRjkTwwfNdt09dsEuXCm1rPNblCy+NkHRz99S6VtzRiKrd4MDtonHPDRhl7bz8IkiXcrxgJP8m7/yRs1Cv0WlxvLWigldDuTyfmWaG62CtF5kEz6mg79VTplxzxJtZecQWpzfluGxcUlHePr/UPW7t5cvpQ+R9EKJrHKDPyV53qx3h59Fpa+qFd3Fifuke1XLMJQry5XXsjnckFWxttxK21WVHnQPBd3JfH1CbyJZE1pq1QZCkBh5Qi4iRzsNllMr101EPRydvkzR+03r8+D3G6DGY3jr1nx19Au+ER937n2K8jbp/GRdS2NLhfHO72rJTWDXKooD2QqWUVFQRQ/VnPU+z7cQ3T8oF3DsHFAkkxxynYALK9ABBH+C86mSsZcf8N5lkkdKkt0GSwJKIH9b4hdvo4fOWjfNiDssTmIAsZaVDJ/NWLIo1geTdaEDsPl3gwf0fcK2bbAsIAAA=',
    PREFIXE: process.env.PREFIX || "!",
    OWNER_NAME: process.env.OWNER_NAME || "MAJENZI JR",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255712254267",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'MAJENZI-MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '1' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
