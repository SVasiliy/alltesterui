const jwtDecode = require('jwt-decode');

export function decodeJWT(jwt) {
    return jwtDecode(jwt);
}
