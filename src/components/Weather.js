import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';

const Weather = () => {
    const { data, isLoading, errorMessage } = useOpenWeather({
      key: '13ccd247332bd89fddbfd235235372b1',
      lat: '30.7046',
      lon: '76.7179',
      lang: 'en',
      unit: 'metric', // values are (metric, standard, imperial)
    });
    return (
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Today"
        unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    );
  };

export default Weather;