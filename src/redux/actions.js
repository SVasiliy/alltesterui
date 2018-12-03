export const ADD_TOKEN = 'ADD_TOKEN'

export function addToken(text) {
    return { type: ADD_TOKEN, text }
}
