import { OPEN_DIALOG, CLOSE_DIALOG, REFRESH, ADD_CARD, DELETE_CARD } from './actionTypes'

export function openDialogWindow() {
  return {
    type: OPEN_DIALOG,
    payload: true,
  }
}

export function closeDialogWindow() {
  return {
    type: CLOSE_DIALOG,
    payload: false,
  }
}

export function refreshPage(city) {
  return {
    type: REFRESH,
    payload: city,
  }
}

export function addWeatherCard(city) {
  return {
    type: ADD_CARD,
    payload: city,
  }
}

export function deleteWeatherCard(city) {
  return {
    type: DELETE_CARD,
    payload: city,
  }
}