export default {
        name: 'image',
        title: 'Image', // this is human readable
        type: 'image',
        options: {
            hotspot: true
        },
        fields: [
            {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                  isHighlighted: true // <-- make this field easily accessible
                },
                validation: Rule => Rule.required().min(5).max(80)
              }
        ]
}