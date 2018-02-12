export function openDialogWindow() {
  return {
    type: 'OPEN_DIALOG',
    payload: true,
  }
}

export function closeDialogWindow() {
  return {
    type: 'CLOSE_DIALOG',
    payload: false,
  }
}

export function refreshPage(city) {
  return {
    type: 'REFRESH',
    payload: city,
  }
}

export function addCityCard(city) {
  return {
    type: 'ADD_CARD',
    payload: city,
  }
}