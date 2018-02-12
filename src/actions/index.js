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

export function addCityCard(city) {
  return {
    type: 'ADD_CARD',
    payload: city,
  }
}