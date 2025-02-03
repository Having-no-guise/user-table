import {IUser} from '../../models'

export interface EditUserModalProps {
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
  user: IUser
}