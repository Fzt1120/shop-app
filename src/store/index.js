import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            user:{}
        }
    },
    mutations:{
        SET_USERINFO(state,user) {
            state.user=user
        }
    }
})

export default store