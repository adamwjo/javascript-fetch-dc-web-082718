const token = "ed453ff68b3cb29391dfc77cca85c1ae7ec26c50";
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
