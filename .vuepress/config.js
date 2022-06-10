module.exports = {
  "title": "APIUJI",
  "description": "閑庭漫步  雲捲雲舒",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "valineConfig": {
      "appId": 'WwGjIEWshTx257juizabP08D-gzGzoHsz',// your appId
      "appKey": 'fj8rK8npFA5qNqCzhIWfvYfy', // your appKey
      "serverURL": 'https://api.apiao.net.cn',
    },
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/gpliufeng",
            "icon": "reco-github"
          },
          {
            "text": "QQ邮箱",
            "link": "mailto:1623401596@qq.com",
            "icon": "reco-mail"
          },
          {
            "text": "官方文档",
            "link": "https://vuepress-theme-reco.recoluan.com/",
            "icon": "reco-document"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
      {
        "title": "作者博客",
        "desc": "Enjoy when you can, and endure when you must.",
        "avatar": "/head.png",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "APIU",
    "authorAvatar": "/avatar.jpg",
    //"record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}