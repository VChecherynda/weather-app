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