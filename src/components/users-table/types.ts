import { IUser } from '../../models'

export interface IUsersTableProps {
  loading?: boolean
  users: IUser[]
  actions?: IUsersTableAction
}

export interface IUsersTableAction {
  key?: string
  action: (value: string) => void
}