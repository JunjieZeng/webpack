<template>
  <div>
    <al-page-render :config="jsonconfig"></al-page-render>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "addFormPage",
        data() {
            return {
                queryData:[],
                jsonconfigOrigin:{
                    "sections": [
                        [
                            {
                                "type": "card",
                                "title": "问题日志",
                                "content": [
                                    {
                                        "type": "single-columns-form",
                                        "content": [
                                            {
                                                "component": "input",
                                                autocomplete:true,
                                                suffixIcon:"el-icon-arrow-down",
                                                "label": "问题发现者",
                                                "keyWord": "issueFinder",
                                                clearable:true,
                                            },
                                            {
                                                "component": "input",
                                                autocomplete:true,
                                                suffixIcon:"el-icon-arrow-down",
                                                "label": "问题产生者",
                                                "keyWord": "issueProducer",
                                                clearable:true,
                                            },
                                            {
                                                "component": "input",
                                                "label": "问题关联任务",
                                                "keyWord": "task",
                                                clearable:true,
                                                "placeholder": "请输入内容"
                                            },
                                            {
                                                "component": "input",
                                                "type":"textarea",
                                                "label":"问题描述",
                                                "keyWord": "issueDesc",
                                                height:"88px"
                                            },
                                            {
                                                "component": "input",
                                                "type":"textarea",
                                                "label":"解决方案",
                                                "keyWord": "issueCase",
                                                height:"88px"
                                            },
                                            {
                                                "component": "submit",
                                                "text": "提交",
                                                "submitUrl": "http://10.11.12.216:8009/issueLog/addIssueLog",
                                                cb(res){
                                                    console.log(res)
                                                    console.log(this)
                                                    console.log(this.queryData)
                                                    if(res.data.code==200){
                                                        this.$router.push('/navMenu')
                                                    }
                                                }
                                            }
                                        ],
                                        "labelWidth":"100px",
                                        "accFilters": {
                                            "userName": '',
                                            creator:'',
                                            "link": "",
                                            "desc": "",
                                            "result": "",
                                        }
                                    }
                                ]
                            }
                        ]
                    ]
                }
            }
        },
        computed:{
            jsonconfig(){
                var that=this
                return Object.assign({},this.jsonconfigOrigin)
            }
        },
        mounted() {

            axios({
                method: 'get',
                url: 'http://10.11.12.216:8009/issueLog/findMembers'
            })
                .then((response)=>{
                    console.log(response);
                    var query=[];
                    for(var i=0;i<response.data.data.length;i++){
                        query.push({value:response.data.data[i]})
                    }
                    this.queryData=query;
                });
        }
    }
</script>

<style scoped>

</style>
