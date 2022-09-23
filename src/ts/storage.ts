import {defineStore} from 'pinia'
export const useUserStore = defineStore('userInfo',{
    state:()=>{
    return{
        id:3,
        name:"公子哥",
        qq:2646809050,
        role:"announcement"
    }
    },

    getters:{

    },

    actions:{
        setName(value: string){
            this.name = value
        },
        setRole(value: string){
            this.role = value
        },
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
        setGoVer(value:string){
            this.goVersion = value
        }
    }
})

