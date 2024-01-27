function updateSoftskillsProfile(profileData) {

    const updateSoftskills = document.getElementById('profile.skills.softSkills')
    updateSoftskills.innerHTML = profileData.skills.softSkills.map(softskill => `<li>${softskill.profileData}</li>`).join('')
}