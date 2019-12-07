const rp = require("request-promise")
const $ = require("cheerio")

exports.createPages = async ({ actions: { createPage } }) => {
  let days = []
  rp("https://nntc.nnov.ru/sites/default/files/sched/zameny.html")
    .then(function(html) {
      const wikiUrls = []
      for (let i = 0; i < 45; i++) {
        days.push($("big > a", html)[i].attribs.href)
      }
      console.log(wikiUrls)
    })
    .catch(function(err) {
      // handle error
    })

  createPage({
    path: `/`,
    component: require.resolve("./src/pages/index.js"),
    context: { days },
  })
}
