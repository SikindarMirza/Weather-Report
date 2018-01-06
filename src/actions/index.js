import axios from 'axios';

const API_KEY = '37d7debae09ffc1c0d1bb920acc036aa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},IN`;
  
  return axios.get(url).
    then(function (response) {
      return {
        type: FETCH_WEATHER,
        payload: response.data
      };
    }).
    catch(function (error) {
      return {
        type: FETCH_WEATHER,
        payload: {
          message: error.response.data.message
        }
      };
    });
}
