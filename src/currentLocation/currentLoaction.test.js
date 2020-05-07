import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import { CurrentLocation } from '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/currentLocation/currentLocation.js';

describe('CurrentLocation', () => {
    it('renders text that we expect', () => {
    const { getByText } = render(<CurrentLocation
        currentLocation={{weather: [{icon: '10d', description: 'cloudy rain'}], main: 110, temp_max: '292.54', mathLow: '290.93', name: 'Denver', dt: '1588875536'}}
        />
        );

        const descriptionEl = getByText('cloudy rain')
        expect(descriptionEl).toBeInTheDocument();

        const nameEl = getByText('Location: Denver')
        expect(nameEl).toBeInTheDocument();

        const dateEl = getByText('Thu May 07 2020')
        expect(dateEl).toBeInTheDocument();
    })
})