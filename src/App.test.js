import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';
import { WeatherContainer } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherContainer/weatherContainer.js'
import { fetchDailyCast } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/apiCalls.js';
jest.mock('/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/apiCalls.js');

describe('App', () => {
    it('when the App loads, we should see an weather for the week', async () => {
        fetchDailyCast.mockResolvedValueOnce([
        {date: 1589047244, high: 289.95, low: 281.63, weather: Array(1)},
        {date: 1589047233, high: 281.95, low: 271.63, weather: Array(1)},
        {date: 1589047288, high: 189.95, low: 181.63, weather: Array(1)},
        ]);

        const { getByText } = render(<App />);

        // const weatherContainer = getByText('cloudy');

        const card = await waitFor(() => getByText('cloudy rain'));

        expect(weatherContainer).toBeInTheDocument();
        expect(card).toBeInTheDocument();
    });
});