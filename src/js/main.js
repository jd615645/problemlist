var app = new Vue({
  el: '#app',
  data() {
    return {
      doneLists: [],
      bugLists: []
    }
  },
  mounted() {
    let api = '1tlqC9h0zVStB3vu4QESWTolOmdCdPBK2v50V802B4QY'
    let url1 = 'https://spreadsheets.google.com/feeds/cells/' + api + '/1/public/values?alt=json'
    let url2 = 'https://spreadsheets.google.com/feeds/cells/' + api + '/2/public/values?alt=json'

    $.when(
      $.getJSON(url1),
      $.getJSON(url2)
    ).then((done, bug) => {
      let doneData = done[0]['feed']['entry']
      let bugData = bug[0]['feed']['entry']
      $.each(doneData, (key, val) => {
        if (key !== 0) {
          this.doneLists.push(val['content']['$t'])
        }
      })
      $.each(bugData, (key, val) => {
        if (key !== 0) {
          this.bugLists.push(val['content']['$t'])
        }
      })
    })
  }
})
