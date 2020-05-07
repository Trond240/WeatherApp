import React from 'react';
import { render, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom'
import { WeatherCard } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/weatherCard/weatherCard.js';

describe('WeatherCard', () => {
    it('renders text that we expect', () => {
    const { getByText } = render(<WeatherCard
        date={'1588875536'}
        high={'292.54'}
        low={'290.93'}
        weather={['clouds', 'few clouds', '02d']}
        />
        );

        const dateEl = getByText("Thu May 07 2020");
        expect(dateEl).toBeInTheDocument();

        const highEl = getByText("High: 66.2 ℉");
        expect(highEl).toBeInTheDocument();

        const lowEl = getByText("Low: 64.4 ℉");
        expect(lowEl).toBeInTheDocument();
    })
})