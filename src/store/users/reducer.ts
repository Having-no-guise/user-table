import { createReducer, PayloadAction } from '@reduxjs/toolkit'

import { IUsersState } from './types'

import { generate, add } from './thunks'
import { removeUser, editUser } from './actions'
import { IUser } from 'models'

const initialState: IUsersState = {//стейт юзеров
  fetching: false,
  users: []
}

export const usersReducer = createReducer(initialState, builder =>
  builder
    .addCase(generate.pending, (state) => ({ ...state, fetching: true }))
    .addCase(generate.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [...payload] }))
    .addCase(generate.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] }))
    .addCase(add.pending, (state) => ({ ...state, fetching: true }))
    .addCase(add.fulfilled, (state, { payload }) => ({ ...state, fetching: false, users: [...state.users, ...payload] }))//сливаем нового юзера в конец к старому списку
    .addCase(add.rejected, (state, { payload }) => ({ ...state, fetching: false, users: [] }))
    //remove редьюсер
    .addCase(removeUser, (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user: IUser) => user.id.value !== action.payload);
    })
    .addCase(editUser, (state, action: PayloadAction<IUser>) => {
      state.users.map(user => {
        if (user.id.value === action.payload.id.value) {
          user.name.first = action.payload.name.first
          user.name.last = action.payload.name.last
          user.email = action.payload.email
          user.phone = action.payload.phone
          user.cell = action.payload.cell
          user.dob = action.payload.dob
        }


      })
    })
)

