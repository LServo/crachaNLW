const userNames = {
  github: 'maykbrito',
  twitter: 'lservo',
  youtube: 'lservo',
  facebook: 'lservo',
  instagram: 'lservo'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${userNames[social]}`
  }
}

changeSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${userNames.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGithubProfileInfos()
