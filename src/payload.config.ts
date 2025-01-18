// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Media } from './collections/Media'
import { Roles } from './collections/Roles'
import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Docs } from './collections/Docs'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    avatar: 'default',
    meta: {
      titleSuffix: ' - Bundrop',
      icons: [
        {
          rel: 'icon',
          type: 'image/png',
          url: '/assets/bundrop.png',
        },
      ],
    },
    components: {
      graphics: {
        Logo: {
          path: '/components/logo#LogoImage',
        },
        Icon: {
          path: '/components/logo#IconImage',
        },
      },
    },
  },
  routes: {
    admin: '/bundrop',
  },
  collections: [Users, Media, Roles, Pages, Docs],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // payloadCloudPlugin(),
    // storage-adapter-placeholder
    formBuilderPlugin({
      fields: {
        checkbox: true,
        country: false,
        email: true,
        message: true,
        number: true,
        select: true,
        payment: false,
        state: false,
        text: true,
        textarea: true,
      },
      formOverrides: {
        admin: {
          group: 'Outreach',
        },
      },
      formSubmissionOverrides: {
        admin: {
          group: 'Outreach',
        },
      },
    }),
  ],
})
