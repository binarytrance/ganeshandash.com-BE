export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields : [
        {
            name: 'name',
            title: 'Skill Name',
            type: 'string',

        },
        {
            name: 'description',
            title: 'Skill Description',
            type: 'text',
        },
        {
            name: 'link',
            title: 'Page Link',
            type: 'url',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
        },
        {
            name: 'image',
            title: 'Image', // this is human readable
            type: 'image',
            options: {
                hotspot: true
            }
        },

    ]
}