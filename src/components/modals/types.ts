import { IUsersTableAction } from 'components/users-table/types';
import {IUser} from '../../models'

export interface EditUserModalProps {
  visible: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  user: IUser
  action: (user: IUser) => void
}