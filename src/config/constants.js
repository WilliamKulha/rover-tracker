//Get the date and then put it one day before.
let today = new Date()
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() -1);
const API_KEY = `${process.env.REACT_APP_ROVER_API_KEY}`

export const INITIAL_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${API_KEY}`

export const SEARCH_URL_START = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'