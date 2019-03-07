import {
  HTTP
} from '../utils/http-p.js'
class ListModel extends HTTP {
  getSelect() {
    return this.request('product_getAll.action');
  }
  getDetail(id) {
    return this.request('product_get.action', {
      product_release_id: id
    });
  }
  getTag() {
    return this.request('tag_getAll.action');
  }
}
export {
  ListModel
}