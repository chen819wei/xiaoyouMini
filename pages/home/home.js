import {
  ListModel
} from '../../models/listModel.js'

var listModel = new ListModel();

Page({
  data: {
    movies: [{
        url: 'http://120.77.221.125/xue/images/w.png'
      },
      {
        url: 'http://120.77.221.125/xue/images/x.png'
      },
      {
        url: 'http://120.77.221.125/xue/images/y.png'
      },
      {
        url: 'http://120.77.221.125/xue/images/z.png'
      },
    ],
    listData: [],
    searching:false
  },
  onLoad: function () {
    listModel.getSelect().then((res) => {
      this.setData({
        listData:res
      })
    })
  },
  onSearching(event){
    this.setData({
      searching:true
    })
  },
  onCancel(event){
    this.setData({
      searching:false
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})