async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Tfreire455/Aulas-Dio.me/main/5-%20portfolio-dio.me/data/profile.json?token=GHSAT0AAAAAACMNLW2UMI2EPZYNOGXZNNQIZNVGXSQ'
    const fetching = await fetch(url)
    return await fetching.json()
}

