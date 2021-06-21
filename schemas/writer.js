export default {
    name: 'writer',
    title: 'Writer',
    type: 'document',
    fields : [
        {
            name: 'title',
            title: 'Article Title',
            type: 'string',

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Slugified text',
            options: {
                source: 'title',
                maxLength: 100
            }
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Published at",
            description: "This can be used to schedule post for publishing",
          },
          {
            name: 'mainImage',
            type: 'image',
            title: 'Main Image'
          },
        {
            name: 'summary',
            title: 'A short sumary',
            type: 'text',
            validation: Rule => Rule.required().max(320)

        },
        {
            title: 'Text',
            name: 'content',
            type: 'array',
            of: [{type: 'block'}, {type: 'image'}]
          },
          // {
          //   title: 'Tags',
          //   name: 'tags',
          //   type: 'array',
          //   of: [{type: 'string'}],
          //   options: {
          //     layout: 'tags'
          //   },
          //   validation: Rule => Rule.required().min(1).unique()
          // },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'articleTags'}]}]
        }
    ]
}