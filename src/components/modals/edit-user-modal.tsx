import React, { useEffect, useState } from 'react';
import { Button, Input, Modal, Typography } from 'antd';
import { EditUserModalProps } from './types';
import { IUser } from 'models';

const { Text } = Typography

export const EditUserModal: React.FC<EditUserModalProps> = ({ visible, setIsModalOpen, user, action }) => {

  if (user) {

    useEffect(() => {
      setName(user.name.first)
      setLastName(user.name.last)
      setEmail(user.email)
      setPhone(user.phone)
      setCell(user.cell)
      setDob(user.dob.date.slice(0, 10))
    }, [user])


    const [name, setName] = useState(user.name.first)
    const [lastName, setLastName] = useState(user.name.last)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)
    const [cell, setCell] = useState(user.cell)
    const [dob, setDob] = useState(user.dob.date.slice(0, 10))

    const handleOk = async () => {
      saveEdit()
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const saveEdit = () => {

      const newName = {
        title: user.name.title,
        first: name,
        last: lastName
      }

      const newDob = {
        age: user.dob.age,
        date: dob
      }

      const newUser: IUser = {
        id: user.id,
        login: user.login,
        picture: user.picture,
        name: newName,
        gender: user.gender,
        nat: user.nat,
        dob: newDob,
        registered: user.registered,
        email: email,
        phone: phone,
        cell: cell,
        location: user.location
      }
      action(newUser)
    }


    return (
      <Modal title="Редактировать пользователя" visible={visible} onOk={handleOk} onCancel={handleCancel} okText="Сохранить" cancelText="Отмена">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>Имя: </Text>
          <Input value={name} style={{ marginLeft: '10px' }} onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>Фамилия: </Text>
          <Input value={lastName} style={{ marginLeft: '10px' }} onChange={(e) => setLastName(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>Почта: </Text>
          <Input value={email} style={{ marginLeft: '10px' }} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>Телефон: </Text>
          <Input value={phone} style={{ marginLeft: '10px' }} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>Ячейка? (cell): </Text>
          <Input value={cell} style={{ marginLeft: '10px' }} onChange={(e) => setCell(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Text>Дата рождения: </Text>
          <Input value={dob} style={{ marginLeft: '10px' }} onChange={(e) => setDob(e.target.value)} />
        </div>




      </Modal>
    )
  }
  else {
    return (

      <></>
    )
  }

}