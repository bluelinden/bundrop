// MIT License
// Copyright (c) 2018-2025 Payload CMS, Inc. info@payloadcms.com

import type { Field } from 'payload'

import deepMerge from '../utilities/deepMerge'
import { formatSlug } from '../utilities/formatSlug'

type Slug = (fieldToUse?: string, overrides?: Partial<Field>) => Field

export const slugField: Slug = (fieldToUse = 'title', overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'slug',
      type: 'text',
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug(fieldToUse)],
      },
      index: true,
      label: 'Path',
    },
    overrides,
  )
