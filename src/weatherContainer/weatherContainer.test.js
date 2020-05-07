import React from 'react';
import {WeatherContainer} from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherContainer/weatherContainer.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('WeatherCard', () => {
    it('renders text that we expect', () => {
    const { getByText } = render(<WeatherContainer
            weatherCard={[{date: '1588875536', temp: '292.54', low: '290.93', weather: [{icon: '10d', description: 'cloudy rain'}]}, {date: '1588875536', temp: '292.54', low: '290.93', weather: [{icon: '10d', description: 'cloudy rain'}]}, {date: '1588875536', temp: '292.54', low: '290.93', weather: [{icon: '10d', description: 'cloudy'}]}]}
        />
        );

        const descriptionEl = getByText('cloudy rain')
        expect(descriptionEl).toBeInTheDocument();

        const description2El = getByText('cloudy')
        expect(description2El).toBeInTheDocument();
    })
})
