var app = new Vue({
  el: '#app',
  methods: {
    markdown: marked,
  },
  data: {
    common: CommonData,
    title: '國會無雙',
    description: '在這裡，我們用資料、資訊設計、互動設計實驗新聞的新型態。',
    pages: [
      {
        id: 'draw',
        name: '不然你來畫畫看啊'
      },
      {
        id: 'map',
        name: '啊不是很有國際觀'
      }
    ]
  }
})
