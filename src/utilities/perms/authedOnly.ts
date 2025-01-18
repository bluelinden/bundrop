import type { Access } from 'payload'

export const authedOnly: Access = ({ req: { user } }) => {
  if (user) {
    return true
  } else {
    return false
  }
}
