import { Users } from './models'

export interface UserSession extends Omit<Users, 'createdAt'> {}
