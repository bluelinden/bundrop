import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Settings',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'user_roles',
      label: 'Positions',
      type: 'relationship',
      relationTo: 'roles',
      // hasMany: true,
    },
  ],
}
