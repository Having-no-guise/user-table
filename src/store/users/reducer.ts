import { createReducer } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { generate, add } from './thunks'

const initialState: IUsersState = {//стейт юзеров
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(generate.pending, (state) => ({ ...state, fetching: true }))
    .addCase(generate.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [ ...payload ] }))
    .addCase(generate.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] }))
    .addCase(add.pending, (state) => ({ ...state, fetching: true }))
    .addCase(add.fulfilled, (state, {payload}) => ({...state, fetching: false, users: [...state.users, ...payload]}))//сливаем нового юзера в конец к старому списку
    .addCase(add.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] }))
  )
    
