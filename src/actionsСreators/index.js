import { OPEN_DIALOG, CLOSE_DIALOG, REFRESH, ADD_CARD, DELETE_CARD } from '../actionTypes'
import { createAction } from 'redux-actions';

export const openDialogWindow = createAction(OPEN_DIALOG, data => data);

export const closeDialogWindow = createAction(CLOSE_DIALOG, data => data);

export const refreshPage = createAction(REFRESH, city => city);

export const addWeatherCard = createAction(ADD_CARD, city => city);

export const deleteWeatherCard = createAction(DELETE_CARD, city => city);