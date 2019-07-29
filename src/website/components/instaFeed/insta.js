(async () => {
  const json = await fetch(`https://api.instagram.com/v1/users/self/media/recent?access_token=14590747835.1677ed0.05084289959a41e99c42caf952ed224c`).then(res => res.json());
  const { data } = json;
  console.log(json);

  const createHashtagHtml = tag => `<li>#${tag}</li>`;

  const createHashtagsHtml = post => `
    <ul class="insta__tags">
      ${post.tags.slice(0, 5).map(createHashtagHtml).join('')}
    </ul>
  `;

  const createLikesHtml = post => `
    <div class="insta__likes">
      ${post.likes.count} likes <i class="fa fa-heart"></i>
    </div>
  `;

  const createCommentsHtml = comment => `
    <div class="insta__commentsCount">
      ${comment.comments.count} Kommentare <i class="far fa-comment"></i>
    </div>
  `

  const createInstaPostHtml = instaPost => `
  <div class="insta__feed">
    <a href="${instaPost.link}" target="blank" class="insta__img">
      <img src='${instaPost.images.low_resolution.url}'/>
      <div class="insta__overlay">
      <i class="fa fa-heart fa-3x"></i>
      </div>
    </a>
    <div class="insta__infos">
      ${createLikesHtml(instaPost)}
      ${createCommentsHtml(instaPost)}
    </div>
  </div>
  `;
  const instafeed = document.getElementsByClassName('insta__feeds')[0];
  instafeed.innerHTML = data.map(createInstaPostHtml).join('');
})()