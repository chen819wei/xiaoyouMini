// components/book/normal/book-normal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    book: Object,
    showLike: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: String,
    author: String,
    img: String
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap: function(event) {
      const product_release_id=this.properties.book.product_release_id;
      console.log(product_release_id);
      wx.navigateTo({
        url: '../../pages/detail/detail?product_release_id=' + product_release_id,
      })


    }
  }
})