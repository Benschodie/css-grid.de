
// fetch data
(async () => {
  const res = await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=14590747835.1677ed0.05084289959a41e99c42caf952ed224c`)
  const json = await res.json();
  const { data } = json;
  console.log(data[0].images.low_resolution.url)

  // get class instafeed
  const renderInstaFeed = `<img src='${data[0].images.low_resolution.url}'/>`
  const instafeed = document.getElementsByClassName('instafeed')[0];
  instafeed.innerHTML = renderInstaFeed;
})()

// loop over response

// render template to site