export interface User {
  email: string
  password: string
}

export interface RegisteredUsers {
  [userEmail: string]: User
}
