import React, { useState } from 'react'
import ResizeObserver from 'rc-resize-observer'
import { Image, Space, Table, TableColumnsType } from 'antd'
import { DeleteFilled, EditOutlined } from '@ant-design/icons'

import dayjs from 'dayjs'

import { IUser } from '../../models'
import { IUsersTableProps } from './types'

import './users-table.less'
import { EditUserModal } from '../modals/edit-user-modal'//модальное окно

export const UsersTable = ({ loading, users, actions }: IUsersTableProps) => {

  const [visible, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [height, setTableHeight] = useState(undefined)

  const heighDelta = 39 // 39 - высота заголовка таблицы

  const handleEditClick = (user: IUser) => {
    setSelectedUser(user)
    setIsModalOpen(true)
  }


  return <ResizeObserver onResize={({ height: componentHeight }) => setTableHeight(Math.max(0, componentHeight - heighDelta))}>
    <div className="users-table">
      <Table size="small" loading={loading} dataSource={users} columns={columns.map((column) => ({
        ...column,
        render: (text, record: IUser, index) => {
          if (column.key === 'actions') {
            return (
              <Space size='middle'>
                <DeleteFilled onClick={() => actions[0].action(record.id.value)} />
                <EditOutlined onClick={() => handleEditClick(record)} />
              </Space>
            )
          }
          else return column.render?.(text, record, index) || text;
        }


      }))}
        scroll={{ y: height }} pagination={false} rowKey={keySelector}
        onRow={(user) => ({ onDoubleClick: () => handleEditClick(user) })} />{/* удаление на даблклик */}

      <EditUserModal visible={visible} user={selectedUser} setIsModalOpen={setIsModalOpen} action={actions[0].actionEdit} />
    </div>

  </ResizeObserver>
}

const keySelector = (user: IUser) => user.login.uuid

const columns: TableColumnsType<IUser> = [
  {
    dataIndex: 'picture',
    width: 64,
    render: ({ thumbnail, large }) => <Image src={thumbnail} preview={{ src: large }} alt="photo" />
  },
  {
    title: 'Имя пользователя',
    dataIndex: ['login', 'username']
  },
  {
    title: 'Полное имя',
    dataIndex: 'name',
    render: ({ title, first, last }) => `${title} ${first} ${last}`
  },
  {
    title: 'Email',
    dataIndex: 'email'
  },
  {
    title: 'Телефон',
    dataIndex: 'phone'//хотфикс -- теперь это телефон
  },
  {
    title: 'Возраст',
    dataIndex: ['dob', 'age']
  },
  {
    title: 'Дата регистрации',
    dataIndex: ['registered', 'date'],
    render: (date: string) => dayjs(date).format('D MMMM YYYY ')
  },
  {
    title: 'Действия',
    dataIndex: 'actions',
    key: 'actions',
  }
]
