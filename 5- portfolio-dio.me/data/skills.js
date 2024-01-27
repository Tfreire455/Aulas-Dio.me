async function updateHardskillsProfile(profileData) {

    const CSS3 = document.getElementById('profile.skills.hardskills');
    CSS3.innerHTML = profileData.skills.hardSkills.map(skills => `<li class="css"><img id="skill-css-img" src="${skills.logo}" alt="${skills.name}"></li>`).join('')

}

(async () => {
    const profileData = await fetchProfileData()
    updateHardskillsProfile(profileData)
})

()