/**
 * Created by fish on 2018/3/29.
 */
var container = new Vue({
    el: '#container',
    data: {
        userName: '',
        password:''
    },
    methods:{
        login:function(event){
            console.log('username',this.userName,'password',this.password)
            window.location.href='../html/index.html'
        }
    }
})
