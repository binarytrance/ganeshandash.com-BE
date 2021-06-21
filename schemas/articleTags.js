import {DiTerminal as techIcon, } from 'react-icons/di';
import { WiAlien as aliensAndShitIcon } from "react-icons/wi";
import { RiQuillPenFill as writerIcon } from "react-icons/ri";
export default {
    // computer name
    name: 'articleTags',
    // visible title
    title: 'Article Tags',
    icon: writerIcon,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Tag Name', // this is human readable
            type: 'string',
            description: 'What is the name of the topic that you want to write about?'
        },
        {
            name: 'tech',
            title: 'Tech Article', // this is human readable
            type: 'boolean',
            description: 'Is this an article related to technology?',
            options: {
                layout: 'checkbox'
            }
        },

    ],

}