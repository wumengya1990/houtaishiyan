import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);


const store = new Vuex.Store({
    state:{
        userToken:'',
        userRole:'',
        userID:''
    },
    mutations:{
        saveUserToken(state,data){
            state.userToken = data
        }
    }
});

export default store;