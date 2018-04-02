/**
 * Created by fish on 2018/3/29.
 */
var productMng = new Vue({
    el: '#productMng',
    data: {
        list:[
            {
                productId:"PRO-20171225154938-173050",
                productName:"【正版粉红豹少女心抱枕！】【全网最便宜】【80cm~130cm】全身的浪漫粉色给人温暖，陪你度过即将到来的漫长冬天的人，就是它，粉红顽皮豹！",
                productOriginAmount:"￥18.00",
                productNowAmount:"￥10.00",
                joinTogether:true,
                productTogetherAmount:"￥8.00",
                sotre:10000,
                status:1,
                createTime:"2017-12-25 15:49:38",
                pv:1000,
                deal:999,
                isHot:true,
                isSale:true
            },
            {
                productId:"PRO-20171225154938-173050",
                productName:"【正版粉红豹少女心抱枕！】【全网最便宜】【80cm~130cm】全身的浪漫粉色给人温暖，陪你度过即将到来的漫长冬天的人，就是它，粉红顽皮豹！",
                productOriginAmount:"￥18.00",
                productNowAmount:"￥10.00",
                joinTogether:true,
                productTogetherAmount:"￥8.00",
                sotre:10000,
                status:1,
                createTime:"2017-12-25 15:49:38",
                pv:1000,
                deal:999,
                isHot:true,
                isSale:true
            }
        ],
        condition:{
            productId:'',
            productName:'',
            status:{
                selected:'0',
                options:[
                    {text:'One',value:'A'},  {text:'Tow',value:'B'},  {text:'Three',value:'C'}
                ]
            },
            pCategory:{
                selected:'0',
                options:[
                    {text:'One',value:'A',
                        subCategory:{
                        selected:'0',
                        options:[
                            {text:'One',value:'A'},  {text:'Tow',value:'B'},  {text:'Three',value:'C'}
                        ]
                        }
                    },
                    {text:'Tow',value:'B',
                        subCategory:{
                            selected:'0',
                            options:[
                                {text:'One',value:'A'},  {text:'Tow',value:'B'},  {text:'Three',value:'C'}
                            ]
                        }
                    },
                    {text:'Three',value:'C'}
                ]
            }
        }
    },
    watch:{

    },
    computed:{

    },
    methods:{
        search:function(event){
            console.log(this.condition)
        },
        pCategoryChanged:function(){
            console.log('pCategoryChanged',this.condition.pCategory.selected)
            for(var i in this.condition.pCategory.options ){
                console.log('this.condition.pCategory.options[i].value',this.condition.pCategory.options[i].value,this.condition.pCategory.options[i].value === this.condition.pCategory.selected)
                if(this.condition.pCategory.options[i].value === this.condition.pCategory.selected){

                    this.condition.subCategory = this.condition.pCategory.options[i].subCategory
                    console.log(this.condition.subCategory)
                    break
                }
            }
        },
    }
})