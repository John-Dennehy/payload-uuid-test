import type { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'related_data',
      type: 'relationship',
      relationTo: 'test-collection',
      hasMany: true,
    }
  ],
}
