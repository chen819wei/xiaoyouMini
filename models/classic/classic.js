import {
    HTTP
} from '../../utils/http.js'

class ClassicModel extends HTTP {
    getLatest(sCallback) {
        this.request({
            url: 'mini_get.action',
            success: (res) => {
                sCallback(res);
            }
        })
    }
}
export {
    ClassicModel
}