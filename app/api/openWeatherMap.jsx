var axios = require('axios');


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&APPID=91e673e403fb2cfe5b5f69b2b81c5ea1';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

    return axios.get(requestUrl).then((res)=>{
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    },(res)=>{
      //reject
      res = {
        data:{
          message: "City not found"
        },
        message: "City not found",
      }
      throw new Error(res.data.message);
    });
  }
}
