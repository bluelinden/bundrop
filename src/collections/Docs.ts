// MIT License
// Copyright (c) 2018-2025 Payload CMS, Inc. info@payloadcms.com
// Copyright (c) 2025 blue linden software. blue@linden.rocks

import type { CollectionConfig } from 'payload'

import { authedOnly } from '@/utilities/perms/authedOnly'

export const Docs: CollectionConfig = {
  slug: 'docs',
  labels: {
    plural: 'Documentation',
    singular: 'Document',
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Internal',
  },
  access: {
    read: authedOnly,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'Content',
      type: 'richText',
      required: true,
    },
  ],
  versions: {
    drafts: true,
  },
}
