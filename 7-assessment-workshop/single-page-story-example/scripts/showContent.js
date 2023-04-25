const story = document.getElementById('story');

function showContent(key) {
    while (story.firstChild) {
        story.removeChild(story.firstChild);
    }
    
    const currentContent = content[key];
    
    const heading = document.createElement('h2');
    heading.textContent = currentContent.heading;
    story.appendChild(heading);
    
    const paragraph = document.createElement('p');
    paragraph.textContent = currentContent.paragraph;
    story.appendChild(paragraph);
    
    const options = currentContent.options;
    if (options) {
        for (let i = 0; i < options.length; i++) {
            const option = document.createElement('button');
            option.textContent = options[i].label;
            option.onclick = function clickOption() {
                showContent(options[i].key);
            }
            story.appendChild(option);
        }
    }
}

showContent('beginning');