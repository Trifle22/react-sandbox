import React, { createContext } from 'react';

export const CoordsByIPContext = createContext({
	coords: '',
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setCoords: (coords: string) => {},
});
