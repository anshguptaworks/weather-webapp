export interface User {
  username: string
  addedDate: string
  status: 'active' | 'inactive'
}

export interface UserAction {
  type: 'add' | 'delete' | 'changeStatus'
  payload?: User
}
