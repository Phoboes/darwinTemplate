import sharp from 'sharp'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { buildConfig } from 'payload'
import { Page } from './app/collections/Homepage'
import { s3Storage } from '@payloadcms/storage-s3'
import { Media } from './app/collections/Media'
import { Footer } from '@/app/collections/Footer'
import { Meta } from '@/app/collections/Meta'
// import { MediaWithPrefix } from "./collections/MediaWithPrefix";

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Media],

  globals: [Page, Footer, Meta],

  plugins: [
    s3Storage({
      collections: {
        media: true,
        // "media-with-prefix": {
        //   prefix,
        // },
      },
      bucket: process.env.NEXT_PUBLIC_AWS_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.AWS_ACCESS_SECRET || '',
        },
        region: process.env.NEXT_PUBLIC_AWS_REGION || '',
        // ... Other S3 configuration
      },
      disableLocalStorage: true,
    }),
  ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || '',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})
