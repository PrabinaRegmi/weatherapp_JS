class Weather {
  constructor(city, country) {
    this.apikey = "eadfa9146a38c8a68ff2d97d64ac1855";
    this.city = city;
    this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}&units=imperial`
    );
    const responseData = await response.json();

    return responseData;
  }

  //   Change weather location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
