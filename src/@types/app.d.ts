export interface User {
  email: string
  password: string
}

export interface Session {
  date: Date
  user: User
}

export interface RegisteredUsers {
  [userEmail: string]: User
}
