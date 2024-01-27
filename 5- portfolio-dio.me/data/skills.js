function updateHardskillsProfile(profileData) {

    const updateImgLogo = document.getElementById('profile.skills.hardskills');
    updateImgLogo.innerHTML = profileData.skills.hardSkills.map(skills => `<li><img src="${skills.logo}" alt="${skills.name}"></li>`).join(' ')

}