export function addCityCard(city) {
  return {
    type: 'ADD_CARD',
    payload: city,
  }
}

export function CloseDialogWindow() {
  return {
    type: 'CLOSE_DIALOG',
    payload: false,
  }
}