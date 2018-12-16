import axios from 'axios'
import {router} from "../main.js"
const state={
    info:{},
    ticket: null,
    showDialog:false

};
const getters={

};
const  mutations = {
    setUser (state,userData) {
      state.info = userData.user;
      state.ticket = userData.ticket;
      axios.defaults.headers.common['ticket']=userData.ticket;
    },
    resetedPass (state) {
        state.info.resetedPass=true;
        state.showDialog=true;
        
      },
    showDialog(state){
        state.showDialog=true;
     },
    hideDialog(state){
        state.showDialog=false;
     },
    removeUser(state){
        state.info = {};
        state.ticket = '';
        state.showDialog=false
        axios.defaults.headers.common['ticket']='';

    }
    ,moveTo(state){
        if(state.info.resetedPass===false){
            router.replace('/reset');
        
    }
    else{
        if(state.info.role==='admin'){
            router.replace('/admin');
        }
            
    }
        
    }
}


const actions={
    signin({commit,dispatch},userData){
        axios.post('/login',userData)
            .then((res)=>{
                console.log("##################result",res);
                commit('setUser', res.data);
                commit('moveTo');
            }) 
            .catch((error)=>{
                console.log(error);
                if(error.response){
                    console.log(error);

                    dispatch('setResMessages',{error:error.response.data.error,color:"alert alert-danger"});}
                
                else{
                    
                    dispatch('setResMessages',{error:'network connection error !',color:"alert alert-danger"});
                }
            });
        },
    resetPassword({commit,dispatch},userData){
        axios.post('/reset/password',userData)
            .then((res)=>{
                console.log(res);
                dispatch('setResMessages',{error:'this admin successfully Added!',color:"alert alert-success"});
                commit('resetedPass');
                commit('moveTo')
            
            }) 
            .catch((error)=>{
                if(error.response){
                    if(error.response.data.error==='invalid ticket'&&error.response.status==401){
                        dispatch('signOut')
                    }
                    else{
                        dispatch('setResMessages',{error:error.response.data.error,color:"alert alert-danger"});}
                }
                else{
                     console.log(error);
                     dispatch('setResMessages',{error:'network connection error !',color:"alert alert-danger"});
                }
                
            });
        },
       
        addAdmin({commit,dispatch},userData){

            axios.post('/add/admin',userData)
            .then((res)=>{
                console.log(res);
                dispatch('setResMessages',{error:'this admin successfully Added!',color:"alert alert-success"});
            }) .catch((error)=>{
                  if(error.response){
                       if(error.response.data.error==='invalid ticket'&&error.response.status==401){
                        dispatch('signOut')
                      }
                      else{
                        commit('hideDialog');
                         dispatch('setResMessages',{error:error.response.data.error,color:"alert alert-danger"});
                        }
                        
                  }
                 else{
                     console.log(error);
                     dispatch('setResMessages',{error:'network connection error !',color:"alert alert-danger"});
                 }
                  
              });
        },
        addstackholder({commit,dispatch},userData){

            axios.post('/add/stackholder',userData)
            .then((res)=>{
                console.log(res);
                dispatch('setResMessages',{error:'this stackholder successfully Added!',color:"alert alert-success"});
            }) .catch((error)=>{
                  if(error.response){
                       if(error.response.data.error==='invalid ticket'&&error.response.status==401){
                        dispatch('signOut')
                      }
                      else{
                        commit('hideDialog');
                        dispatch('setResMessages',{error:error.response.data.error,color:"alert alert-danger"});}
                        
                    
                  }
                 else{
                     console.log(error);
                     dispatch('setResMessages',{error:'network connection error !',color:"alert alert-danger"});
                 }
                  
              });
        },
        hideDialog({commit}){
            commit('hideDialog')
        },
    
        
        signOut({commit}){
            console.log('inside sign out');
            commit('removeUser');
            router.replace('/');
            // axios.post('/signOut',userData)
            // .then((res)=>{
            //      console.log('inside sign out');
            //      commit('removeUser');
            //      router.replace('/');
            // }) .catch((error)=>{
            //          console.log(error);
            //          dispatch('setResMessages',{error:'network connection error !'});
                  
            //   });
           
        },
        redirect({ commit,state }) {
            if(state.info){
            commit('moveTo')
        }
     }

}

export default{
    state,
    mutations,
    getters,
    actions
}