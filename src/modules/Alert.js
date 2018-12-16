const state = {
    resMessages: '',
    showAlert:false,
    color:"alert alert-danger"
}

const mutations={
    resMessages(state,messages){
        state.resMessages = messages.error
        console.log(messages.color);
        
        state.color=messages.color
        state.showAlert=true;
        console.log('message setted',messages);
        
    },
    clearMessages(state){
        state.resMessages = ''
        state.showAlert=false;
        state.color="alert alert-danger"
    }
}

const actions={
    setResMessages({commit, state},messages){
        if(messages.error){
            console.log('in action',messages.error)
            console.log('in action',messages.color)
            commit('resMessages', messages);
        } 
    },
    clearMessages({commit}){
        commit('clearMessages');
    }
}

const getters= {
    // resMessages: state => {
    //     if (state.resMessages.constructor.name == "Array") {
    //         return state.resMessages = state.resMessages.map(m=>{return `[ ${m.param} ]  ${m.msg}`});
    //     } else {
    //         console.log("NOT ARR");
    //         console.log(state.resMessages)
    //         return [state.resMessages]
    //     }
    // } 
  }

export default {
    state,
    mutations,
    actions,
    getters
}