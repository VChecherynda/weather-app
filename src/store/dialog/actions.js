import { createAction } from 'redux-actions';

export const refreshPage = createAction('REFRESH', city => city);

export const openDialogWindow = createAction('OPEN_DIALOG', data => data);

export const closeDialogWindow = createAction('CLOSE_DIALOG', data => data);