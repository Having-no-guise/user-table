import React from 'react'

import { UsersTable } from '../components/users-table'

import { useAppSelector, useAppDispatch } from '../store'
import { IUsersTableAction } from 'components/users-table/types'
import { editUser, removeUser } from '../store/users/actions'
import { IUser } from 'models'

export const UsersTableContainer = () => {

  const dispatch = useAppDispatch()

  const actions: IUsersTableAction[] = [
    { key: 'delete', action: (value: string) => dispatch(removeUser(value)), actionEdit: (user: IUser) => dispatch(editUser(user)) }//экшен на удаление
  ]


  const users = useAppSelector(s => s.users.users)
  const fetching = useAppSelector(s => s.users.fetching)

  return <UsersTable loading={fetching} users={users} actions={actions} />
}
