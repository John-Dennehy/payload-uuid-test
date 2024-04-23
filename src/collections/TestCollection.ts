import type { CollectionConfig } from 'payload/types'

export const TestCollection: CollectionConfig = {
  slug: 'test-collection',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    },
  ],
}