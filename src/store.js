import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import user from './modules/user'

import loading from './modules/loading'
import Alert from './modules/Alert'
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
    storage: window.localStorage
  })

export const store=new Vuex.Store({

    modules:{
        user,
        loading,
        Alert
    },
    plugins: [vuexLocal.plugin]

})