import React, { useState } from 'react'
import { users as mockUsers } from './mockdata'
import { User } from './types'
import Input from 'components/input'
import Button from 'components/button'
import { ButtonVariant } from 'components/button/button.types'
import { getIcons } from 'assets'
import { IconsType } from 'assets/types'
import Toggle from 'components/toggle'

const Table = () => {
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [newUser, setNewUser] = useState({
    username: '',
    addedDate: '',
    status: 'active' as 'active' | 'inactive'
  })

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newUser.username || !newUser.addedDate) return
    addUser(newUser)
    setNewUser({ username: '', addedDate: '', status: 'active' })
  }

  const addUser = (user: User) => {
    setUsers([...users, user])
  }

  const deleteUser = (username: string) => () => {
    setUsers(users.filter((user) => user.username !== username))
  }

  const changeUserStatus = (username: string) => () => {
    setUsers(
      users.map((user) =>
        user.username === username
          ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
          : user
      )
    )
  }

  return (
    <div className="min-w-screen flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-[95%]">
        <form
          onSubmit={handleAddUser}
          className="mb-4 flex justify-between items-center md:flex-row flex-col gap-4"
        >
          <Input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
          />
          <input
            type="date"
            placeholder="Added Date"
            className="p-4 cursor-text rounded border border-solid border-grey100 flex justify-end items-center max-h-10 w-full bg-white"
            value={newUser.addedDate}
            onChange={(e) => setNewUser({ ...newUser, addedDate: e.target.value })}
          />
          <Button
            disabled={!newUser.username || !newUser.addedDate}
            className="whitespace-normal h-10 md:w-[600px] w-full disabled:cursor-not-allowed"
            variant={ButtonVariant.Primary}
            buttonType="submit"
          >
            Add User
          </Button>
        </form>
        {/* Table */}
        <table className="table-fixed border-collapse border border-gray-500 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-center">User Name</th>
              <th className="border border-gray-300 px-4 py-2">Added Date</th>
              <th className="border border-gray-300 px-4 py-2">Status</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.username} className="hover:bg-gray-100">
                <td className="border border-gray-300 text-center px-4 py-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                  {user.username}
                </td>
                <td className="border border-gray-300 px-4 text-center py-2">{user.addedDate}</td>
                <td
                  className={`border border-gray-300 px-4 py-2 text-center ${
                    user.status === 'active' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {user.status}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex justify-center items-center md:gap-6 gap-1">
                    <Toggle
                      className="w-fit"
                      checked={user.status === 'active'}
                      onChange={changeUserStatus(user.username)}
                    />
                    <div onClick={deleteUser(user.username)}>
                      {getIcons(IconsType.delete, {
                        pathClassName: 'hover:fill-red-500 transition-colors cursor-pointer'
                      })}
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
