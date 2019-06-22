const contentful = require('contentful')
const documentToHtmlString = require('@contentful/rich-text-html-renderer').documentToHtmlString;
const fs = require('fs');

(async () => {
  const client = contentful.createClient({
    space: 'j12grgbfbwi8',
    accessToken: 'up60zgAzqWbv8IJiPqVV3S5P4b6gnsYs9h9J2_whUTA'
  });

  const posts = await client.getEntries({
    content_type: 'post'
  })
    .then(response => response.items)
    .catch(console.error)

  const postsHtml = posts.map(post => `
  <div class="post">
    <h3>${post.fields.title}</h3>
    <article>${documentToHtmlString(post.fields.content)}</article>
  </div>`
  ).join('');
  fs.writeFileSync(__dirname + '/../website/content/posts.hbs', postsHtml);
})()
