import {
    HTTP
} from '../utils/http-p.js'
class ListModel extends HTTP{
    getSelect(){
        return this.request('mini_getAll.action');
    }
}
export {ListModel}