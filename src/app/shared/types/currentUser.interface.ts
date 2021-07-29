export interface CurrentUserInterface{
  id: number
  email: string
  createdAt: string
  updatedAt:string
  username: string
  bio: string | null // ? - проверяет на  undefined и НЕ проверяет на null
  image: string | null
  token: string
}