import type { CollectionConfig } from 'payload'

export const Roles: CollectionConfig = {
  slug: 'roles',
  labels: {
    plural: 'Staff Positions',
    singular: 'Staff Position',
  },
  admin: {
    useAsTitle: 'name',
    group: 'Settings',
  },
  auth: false,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      unique: true,
    },
    {
      name: 'permissions',
      label: 'Permissions',
      type: 'group',
      fields: [
        {
          name: 'works',
          label: 'Works',
          type: 'group',
          fields: [
            {
              name: 'MANUALLY_SUBMIT_WORKS',
              label: 'Can manually submit works',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'EDIT_SUBMITTED_WORKS',
              label: 'Can edit the content of submitted works',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'PERMADELETE_WORKS',
              label: 'Can permanently delete any works',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'MOVE_SUBMITTED_WORKS',
              label: 'Can move a work to any category',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'CAN_EDIT_OWNED_WORKS',
              label: 'Can edit the content of works in a category they control',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'CAN_MARK_OWNED_WORKS',
              label: 'Can mark works as ready/not-ready in a category they control',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'users',
          label: 'Staff member management',
          type: 'group',
          fields: [
            {
              name: 'EDIT_USERS',
              label: "Can create users and edit any user's details",
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'EDIT_USER_AUTH',
              label: "Can edit any user's login details",
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'DELETE_USERS',
              label: 'Can delete existing users',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'roles',
          label: 'Staff position management',
          type: 'group',
          fields: [
            {
              name: 'ASSIGN_ROLES',
              label:
                "Can give and take other members' roles, as long as they have equal or fewer permissions to/than this role",
              type: 'checkbox',
              defaultValue: false,
            },

            {
              name: 'EDIT_ROLE_PERMS',
              label:
                'Can edit the permissions of any role with equal or fewer permissions to/than this role',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'voting',
          label: 'Vote tallying',
          type: 'group',
          fields: [
            {
              name: 'CREATE_VOTES',
              label: 'Can hold voting sessions',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'END_VOTES',
              label: 'Can end any vote before the time is up',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'END_OWN_VOTES',
              label: 'Can end a vote created by this role before the time is up',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'REVIVE_VOTES',
              label: 'Can open a vote to more submissions after it ends',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'REVIVE_OWN_VOTES',
              label: 'Can open a vote created by this role to more submissions after it ends',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'DELETE_VOTES',
              label: 'Can delete any voting session permanently',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'categories',
          label: 'Categories',
          type: 'group',
          fields: [
            {
              name: 'CREATE_CATEGORIES',
              label: 'Create new categories',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'GIVE_ROLE_CATEGORIES',
              label: 'Can give an owned category to another role',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'EDIT_ROLE_CATEGORIES',
              label: 'Can move any category to any role',
              type: 'checkbox',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
}
