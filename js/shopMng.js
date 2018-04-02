/**
 * Created by fish on 2018/3/29.
 */
var shopMng = new Vue({
    el: '#shopMng',
    data: {
        shopName:'店铺名称',
        shopAvatar:"https://hongjiu-1252785849.cos.ap-guangzhou.myqcloud.com/COS_be7e706ddd024451944617610181e437",
        shopAvatarKey:'',
        wellcomeText:'欢迎您来撩我们！',
        shopBanner:"https://hongjiu-1252785849.cos.ap-guangzhou.myqcloud.com/COS_be7e706ddd024451944617610181e437",
        shopBannerKey:'',
        firstNavList:[
            {
                "text": "全部宝贝",
                "url": "/pages/shop/list",
                "img":"",
                "imgkey":"",
                "sort": 1,
                "type": 1,
                "linkType": 1
            }
        ]
    },
    computed: {
        innerHeight: function () {
            return window.innerHeight
        }
    },
    methods:{
        avatarClick:function(){
            $("#shopAvatarInput").click()
        },
        shopBannerClick:function(){
            $("#shopBannerInput").click()
        },
        firstNavImageClick:function(event){
            $("#firstNavImageInput").click()
        },
        firstNavImageChange:function(event){
            var index = event.target.dataset.index
            var that = this
            var reader = new FileReader();
            var AllowImgFileSize = 5*1024*1024; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
            var file = $("#shopBannerInput")[0].files[0];
            var imgUrlBase64;
            if (file) {
                imgUrlBase64 = reader.readAsDataURL(file);
                reader.onload = function (e) {
                    if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                        alert('上传失败，请上传不大于5M的图片！');
                        return;
                    } else {
                        $.ajax(
                            {
                                // url:"http://localhost:9020/Upload/uploadImageOfBase64",
                                url:"./uploadImgRsp",
                                type : "POST",
                                dataType:"json",
                                data : {
                                    "base64Str" : reader.result,
                                    "cos":1,
                                    "session":""
                                },
                                success:function(result){
                                    if(result && result.code==1){
                                        that.firstNavList[index].img = reader.result
                                        that.firstNavList[index].imgkey = result.data
                                    }else{
                                        alert(result.msg)
                                    }
                                }
                            });
                    }
                }
            }
        },
        shopBannerChange:function(){
            var that = this
            var reader = new FileReader();
            var AllowImgFileSize = 5*1024*1024; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
            var file = $("#shopBannerInput")[0].files[0];
            var imgUrlBase64;
            if (file) {
                imgUrlBase64 = reader.readAsDataURL(file);
                reader.onload = function (e) {
                    if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                        alert('上传失败，请上传不大于5M的图片！');
                        return;
                    } else {
                        $.ajax(
                            {
                                // url:"http://localhost:9020/Upload/uploadImageOfBase64",
                                url:"./uploadImgRsp",
                                type : "POST",
                                dataType:"json",
                                data : {
                                    "base64Str" : reader.result,
                                    "cos":1,
                                    "session":""
                                },
                                success:function(result){
                                    if(result && result.code==1){
                                        that.shopBanner = reader.result
                                        that.shopBannerKey = result.data
                                    }else{
                                        alert(result.msg)
                                    }
                                }
                            });
                    }
                }
            }
        },
        shopAvatarChange:function(){
            var that = this
            var reader = new FileReader();
            var AllowImgFileSize = 5*1024*1024; //上传图片最大值(单位字节)（ 2 M = 2097152 B ）超过2M上传失败
            var file = $("#shopAvatarInput")[0].files[0];
            var imgUrlBase64;
            if (file) {
                //将文件以Data URL形式读入页面
                imgUrlBase64 = reader.readAsDataURL(file);
                reader.onload = function (e) {
                    //var ImgFileSize = reader.result.substring(reader.result.indexOf(",") + 1).length;//截取base64码部分（可选可不选，需要与后台沟通）
                    if (AllowImgFileSize != 0 && AllowImgFileSize < reader.result.length) {
                        alert('上传失败，请上传不大于5M的图片！');
                        return;
                    } else {
                        //调用服务器上传Base64位的图片
                        $.ajax(
                            {
                               // url:"http://localhost:9020/Upload/uploadImageOfBase64",
                                url:"./uploadImgRsp",
                                type : "POST",
                                dataType:"json",
                                data : {
                                    "base64Str" : reader.result,
                                    "cos":1,
                                    "session":""
                                },
                                success:function(result){
                                    if(result && result.code==1){
                                        that.shopAvatar = reader.result
                                        that.shopAvatarKey = result.data
                                    }else{
                                        alert(result.msg)
                                    }
                                }
                            });
                    }
                }
            }
        },
    }
})