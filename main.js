let userTwitter = prompt('Qual seu user do Twitter?'),
  userInstagram = prompt('Qual seu user do Instagram?'),
  userFacebook = prompt('Qual seu user do Facebook?'),
  userGithub = prompt('Qual seu user do Github?'),
  userYoutube = prompt('Qual seu user do Youtube?')

const userNames = {
  github: userGithub,
  twitter: userTwitter,
  youtube: userYoutube,
  facebook: userFacebook,
  instagram: userInstagram
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
