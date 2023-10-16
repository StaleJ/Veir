import { Feature } from "../models/yr.model";

export default class YrService {
  static async getYrWeatherData(lat: string, long: string): Promise<Feature> {
    console.log("Fetching weather data", lat, long);
    try {
      const response = await fetch(
        `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`,
        {
          headers: {
            "User-Agent": "veir",
          },
        }
      );
      console.log("Response: ", response.status, response.statusText);
      const data = await response.json();
      console.log("Data: ", data);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Could not fetch weather data");
    }
  }
}
