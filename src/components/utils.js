const jwtDecode = require('jwt-decode');

export function popup() {
    alert('Hello World');
}

export function decodeJWT(token) {
    alert(JSON.stringify(jwtDecode(token)));
}
