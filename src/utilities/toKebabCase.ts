// MIT License
// Copyright (c) 2018-2025 Payload CMS, Inc. info@payloadcms.com

export const toKebabCase = (string: string) =>
  string
    ?.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
