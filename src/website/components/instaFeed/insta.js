(async () => {
  const json = await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=14590747835.1677ed0.05084289959a41e99c42caf952ed224c`).then(res => res.json());
  const { data } = json;
  console.log(data)

  const createHashtagHtml = tag => `<li>#${tag}</li>`;

  const createHashtagsHtml = post => `
    <ul class="insta__tags">
      ${post.tags.slice(0, 5).map(createHashtagHtml).join('')}
    </ul>
  `;

  const createLikesHtml = post => `
    <div class="insta__likes">
      ❤️${post.likes.count}
    </div>
  `;

  const createInstaPostHtml = instaPost => `
  <a href="${instaPost.link}" target="blank" class="insta">
    <img src='${instaPost.images.low_resolution.url}'/>
    <div class="insta__overlay">
      ${createLikesHtml(instaPost)}
      ${instaPost.tags.length > 0 ? createHashtagsHtml(instaPost) : ''}
    </div>
  </a>
  `;
  const instafeed = document.getElementsByClassName('instafeed')[0];
  instafeed.innerHTML = [...data, ...data].map(createInstaPostHtml).join('');
})()