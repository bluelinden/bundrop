// MIT License
// Copyright (c) 2018-2025 Payload CMS, Inc. info@payloadcms.com
// Copyright (c) 2025 blue linden software. blue@linden.rocks

import type { CollectionConfig } from 'payload'

import { FormBlock } from '../../blocks/Form'
import { slugField } from '../../fields/slug'
import { publishedOnly } from '../../utilities/perms/publishedOnly'

import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: publishedOnly,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
    group: 'Outreach',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'layout',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ defaultFeatures, rootFeatures }) => [
                  ...defaultFeatures,
                  BlocksFeature({
                    blocks: [FormBlock],
                  }),
                ],
              }),

              required: true,
            },
          ],
          label: 'Content',
        },
      ],
    },
    slugField(),
  ],
  versions: {
    drafts: true,
  },
}
