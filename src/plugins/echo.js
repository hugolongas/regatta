// plugins/echo.js
import Echo from 'laravel-echo';
window.Pusher = require('pusher-js');

const laravelEcho = new Echo({
    broadcaster: 'pusher',
    key: process.env.VUE_APP_PUSHER_APP_KEY,
    cluster: process.env.VUE_APP_PUSHER_APP_CLUSTER,
    encrypted: true,
    forceTLS: true,
});

window.echo = laravelEcho;

window.echo.channel('regatta-channel')
.listen('AthleteAdded', ()=>{
    console.log("AthleteAdded");
});

export default laravelEcho;