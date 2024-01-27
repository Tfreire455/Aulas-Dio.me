function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo');
    photo.src = profileData.photo;

    const name = document.getElementById('profile-name');
    name.innerHTML = profileData.name;

    const jobs = document.getElementById('profile-jobs');
    jobs.innerHTML = profileData.job;

    const location = document.getElementById('profile-location');
    location.innerHTML = profileData.location;

    const telephone = document.getElementById('profile-telephone');
    telephone.innerHTML = profileData.phone;

    const whatsapp = document.getElementById('profile-whatsapp');
    whatsapp.innerHTML = profileData.whatsapp;

    const email = document.getElementById('profile-email');
    email.innerHTML = profileData.email;
}




(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardskillsProfile(profileData)
    updateSoftskillsProfile(profileData)
})()