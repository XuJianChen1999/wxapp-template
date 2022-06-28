export default Behavior({
  data: {
    popupVisible: false
  },
  methods: {
    setPopupVisible() {
      const {popupVisible} = this.data
      this.setData({
        popupVisible: !popupVisible
      })
    }
  }
})
