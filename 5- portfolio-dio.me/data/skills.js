function updateHardskillsProfile(profileData) {

    const CSS3 = document.getElementById('profile.skills.hardskills');
    CSS3.innerHTML = profileData.skills.hardSkills.map(skill => `<li class="css"><img id="skill-css-img" src="${skill.logo}" alt="${skill.name}"></li>`).join('')

}