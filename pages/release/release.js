// pages/release/release.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleCount: 0,
    contentCount: 0,
    title: '',
    content: '',
    images: [],
    contact_name: '',
    phone_number: '',
    address: '',
    contact_name_count: 0,
    phone_number_count: 0,
    address_count:0
  },
  handleTitleInput: function(event) {
    this.data.title = event.detail.value
    const length = parseInt(this.data.title.length)
    this.setData({
      titleCount: length
    })
  },
  handleContentInput: function(event) {
    this.data.content = event.detail.value
    const length = parseInt(this.data.content.length)
    this.setData({
      contentCount: length
    })
  },
  chooseImage: function(event) {
    wx.chooseImage({
      count: 4,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths)
        this.data.images = images.length <= 4 ? images : images.slice(0, 4)
        this.setData({
          images: images
        })
      }
    })
  },
  removeImage: function(event) {
    const idx = e.target.dataset.idx
    const images = this.data.images.splice(idx, 1)
    this.setData({
      images: images
    })
  },

  handleImagePreview: function(event) {
    const idx = e.target.dataset.idx
    const images = this.data.images

    wx.previewImage({
      current: images[idx],
      urls: images,
    })
  },
  submitForm: function(event) {
    wx.showToast({
      title: '发布成功',
      icon: '',
      image: '/images/my/ok.png',
      duration: 3000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {
        wx.navigateBack()
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})