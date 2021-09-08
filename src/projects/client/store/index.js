import { createStore } from 'vuex'

export default createStore({
  state: {
    showMask: false,
    sideBarShow: false,
    tablist: [
      { txt: "博客", routename: "home", icon: "book" },
      { txt: "归档", routename: "archive", icon: "archive" },
      { txt: "关于我", routename: "about", icon: "about" },
      // { txt: "留言板", routename: "comment", icon: "comment" }
    ],
    tags: [
      "javascript",
      "vue",
      "react",
      "css",
      "node",
      "mongodb",
      "歌词",
      "生活随笔"
    ]
  },
  mutations: {
    updateMaskStatus (state, payload) {
      state.showMask = payload.showMask
    },
    updateSideBarStatus (state, payload) {
      state.sideBarShow = payload.sideBarShow
    },
  },
  actions: {
  },
  modules: {
  }
})
