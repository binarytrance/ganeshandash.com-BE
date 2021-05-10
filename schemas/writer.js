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
          {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              layout: 'tags'
            },
            validation: Rule => Rule.required().min(1).unique()
          }
    ]
}