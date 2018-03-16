import { createAction } from 'redux-actions';

export const addWeatherCard = createAction('ADD_CARD', city => city);

export const deleteWeatherCard = createAction('DELETE_CARD', city => city);