import React, { Suspense } from 'react'

import { AppLayout, IAppAction } from '../components/app-layout'
import { UsersTableContainer } from './users-table-container'

import { generate, add } from '../store/users/thunks'
import { useAppDispatch } from '../store'

export const AppLayoutContainer = () => {
  const dispatch = useAppDispatch()

  const actions: IAppAction[] = [
    { key: 'generate', title: 'Сгенерировать еще раз', action: () => dispatch(generate(20)) },
    { key: 'add', title: 'Добавить пользователя', action: () => dispatch(add(1)) }//Экшен на добавление 1 пользователя
  ]

  return <Suspense> 
  <AppLayout actions={actions}>
    <UsersTableContainer />
  </AppLayout>
  </Suspense>
}
