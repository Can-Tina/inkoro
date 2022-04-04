const URL = process.env.REACT_APP_API_URL;

const GET_TATTOOS_URL = URL + 'tattoo/'
const GET_USER_TATTOOS_URL = URL + 'tattoo/1'

module.exports = {
    URL,
    GET_TATTOOS_URL,
    GET_USER_TATTOOS_URL
}