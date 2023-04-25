const content = {};

content.beginning = {
    heading: 'The Beginning',
    paragraph: 'This is the beginning.',
    options: [
        {
            label: 'Go to the forest',
            key: 'forest',
        },
        {
            label: 'Go to the beach',
            key: 'beach',
        },
    ],
}

content.forest = {
    heading: 'The Forest',
    paragraph: 'You are now in the forest.',
    options: [
        {
            label: 'Go to the beach',
            key: 'beach',
        },
        {
            label: 'Go to the castle',
            key: 'castle',
        },
    ],
}

content.beach = {
    heading: 'The Beach',
    paragraph: 'A shark kills you. THE END!',
    options: [
        {
            label: 'Restart',
            key: 'beginning',
        }
    ]
}

content.castle = {
    heading: 'The Castle',
    paragraph: 'You are now in the castle.',
    /* to be continued... */
}
