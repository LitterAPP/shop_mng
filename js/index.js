/**
 * Created by fish on 2018/3/26.
 */
var frame = new Vue({
    el: '#frame',
    data: {
        contentSrc: '../html/wellcome.html'
    },
    computed: {
        innerHeight: function () {
            return window.innerHeight
        }
    }
})
