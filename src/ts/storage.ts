import {defineStore} from 'pinia'
export const useUserStore = defineStore('userInfo',{
    state:()=>{
    return{
        id:0,
        name:"田所浩二",
        qq:1145141919,
        role:"admin"
    }
    },

    getters:{

    },

    actions:{
    }
})

export const useDebugInfoStore = defineStore('debugInfo',{
    state:()=>{
    return{
        goVersion: "[GoVersion]",
        qq: {
        "account": 0,
            "online": false
        },
        version: "[version]"
    }
    },

    getters:{

    },

    actions:{

    }
})

