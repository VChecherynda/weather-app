export function OpenDialogWindow() {
  return {
    type: 'OPEN_DIALOG',
    payload: true,
  }
}

export function CloseDialogWindow() {
  return {
    type: 'CLOSE_DIALOG',
    payload: false,
  }
}

export function AddWeatherCard() {
  return {
    type: 'ADD_CARD',
    payload: [1,2],
  }
}