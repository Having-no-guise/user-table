import { createAction } from '@reduxjs/toolkit'

import { IUser } from '../../models'

export const setUsers = createAction<IUser[]>('users.setReady')
export const removeUser = createAction<string>('users.removeUser')//экшен на удаление, ожидает user.id.value
export const editUser = createAction<IUser>('users.editUser')//экшен на измнение
