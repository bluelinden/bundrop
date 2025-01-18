// MIT License
// Copyright (c) 2018-2025 Payload CMS, Inc. info@payloadcms.com

import type { Access } from 'payload'

export const publishedOnly: Access = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    _status: {
      equals: 'published',
    },
  }
}
