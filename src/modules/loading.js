let loadingInterval = {};

const  state = {
    loadingProgress: 0,
    showProgressBar: false,
    progressInterval: null,
    rundom:""
}

const mutations={
    load(state,precent){
      //  console.log('inside loding',precent);
        if(!state.showProgressBar)state.showProgressBar=true;
        state.loadingProgress = precent;
    },
    stopLoad(state,url){
       //console.log('inside end loading',url);
        state.showProgressBar = true;
        state.loadingProgress =0
        state.random=""
       loadingInterval[url]=0;
    },
    generateRundom(state){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
       state.random=text;
    }
}

const actions={
    startLoading({commit, dispatch, state},reqId){

      //  console.log('inside startloding');
       // state.loadingProgress=10;
       commit('generateRundom');
        let x = 5;
        commit('load', x);
        loadingInterval[reqId] = setInterval(()=>{
           // console.log(loadingInterval);
           
            x += 10
          //  console.log('inside startloding',x);
            

            commit('load', x);
           // console.log('startloading',x);
            if(x >= 100){
                dispatch('endLoading',reqId);
            }
        
       
    }, 1000)
    },
    endLoading({commit,state},reqId){
       // console.log('inside end loading',loadingInterval);
        clearInterval(loadingInterval[reqId]);
        commit('load', 100);
        setTimeout(()=>{
            commit('stopLoad',reqId);
        },300)
    }
}

export default {
    state,
    mutations,
    actions
}