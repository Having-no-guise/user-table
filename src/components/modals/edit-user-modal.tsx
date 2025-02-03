import React, { useState } from 'react';
import { Button, Input, Modal, Typography } from 'antd';
import { EditUserModalProps } from './types';

const {Text} = Typography

export const EditUserModal : React.FC<EditUserModalProps> = ({visible, onCancel, onOk, user} ) => { 

  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal title="Редактировать пользователя" visible = {isModalOpen} onOk={handleOk} onCancel={handleCancel}>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Text>Имя: </Text>
      <Input defaultValue={user.name.first} style={{marginLeft: '10px'}}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Text>Фамилия: </Text>
      <Input defaultValue={user.name.last} style={{marginLeft: '10px'}}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Text>Почта: </Text>
      <Input defaultValue={user.email} style={{marginLeft: '10px'}}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Text>Телефон: </Text>
      <Input defaultValue={user.phone} style={{marginLeft: '10px'}}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Text>Ячейка? (cell): </Text>
      <Input defaultValue={user.cell} style={{marginLeft: '10px'}}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'row'}}>
      <Text>Дата рождения: </Text>
      <Input defaultValue={user.dob.date.slice(0,10)} style={{marginLeft: '10px'}}/>{/* добавить сохранение изменений */}
      </div>




    </Modal>
  )

}