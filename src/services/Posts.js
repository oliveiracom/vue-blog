import { http } from './Config';

export default {
    listAll: () => {
        return http.get('posts')
    },

    single: (id) => {
        return http.get('posts/' + id)
    }
}