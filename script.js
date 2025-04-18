const buttons = {
    frontend: document.getElementById('frontend_skill'),
    backend: document.getElementById('backend_skill'),
    widgets: document.getElementById('widgets_skill')
};

const skills = {
    frontend: document.getElementById('skills_frontend'),
    backend: document.getElementById('skills_backend'),
    widgets: document.getElementById('skills_widgets') 
}

const changeColor = (button) => {
    Object.keys(buttons).forEach(key => {
        buttons[key].style.background = key === button ? 'rgba(0, 0, 0, 0.5)' : 'none';
    });
};

const toggleSkills = (button) => {
    Object.keys(skills).forEach(key => {
        skills[key].style.display = key === button ? 'flex' : 'none';
    });
};

Object.keys(buttons).forEach(key => {
    buttons[key].addEventListener('click', () => {
        changeColor(key);
        // Modified to use grid display instead of flex
        Object.keys(skills).forEach(skillKey => {
            skills[skillKey].style.display = skillKey === key ? 'grid' : 'none';
        });
    });
});

