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
            name: 'current',
            title: 'Current Activity',
            type: 'string',
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
            description: 'Slugified text',
            options: {
                source: 'name',
                maxLength: 100
            }
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