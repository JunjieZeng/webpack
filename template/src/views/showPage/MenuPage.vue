<template>
  <div class="pageContainer" style="font-size: 0;">
    <al-card>

      <al-form :labelWidth="'100px'">
        <al-row :gutter="20">
          <al-col :span="8">
            <al-input v-model="accFilters.issueFinder" width="100%" :queryData="queryData" autocomplete suffixIcon="el-icon-arrow-down"
                      label="问题的发现者" clearable></al-input>
          </al-col>
          <al-col :span="8">
            <al-input v-model="accFilters.issueProducer" width="100%" :queryData="queryData" autocomplete suffixIcon="el-icon-arrow-down"
                      label="问题的产生者" clearable></al-input>
          </al-col>
          <al-col :span="8">
            <al-input v-model="accFilters.task" width="100%" label="问题关联任务" clearable></al-input>
          </al-col>
          <al-col :span="8">
            <al-input v-model="accFilters.issueDesc" width="100%" label="问题描述" clearable></al-input>
          </al-col>
          <al-col :span="8">
            <al-button type="primary" @click="findPage(1)">查询</al-button>
          </al-col>
        </al-row>
      </al-form>

    </al-card>
    <div style="margin-bottom: 20px"></div>

    <al-card title="问题日志列表">
      <al-button style="display: block;" slot="header-bar-right" type="primary" @click="$router.push('/addFormPage')">
        新增
      </al-button>
      <al-table :data="data" :columns="columns" style="margin-bottom: 20px;" :pageRequest="pageRequest" @findPage="findPage">
      </al-table>
    </al-card>

  </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "menuPage",
        data() {
            return {
                accFilters: {
                    issueDesc: '',
                    task: '',
                    issueFinder: '',
                    issueProducer: '',
                    createAt: '',
                },
                queryData: [
                    {value: '研发部'},
                    {value: '兰斌'},
                    {value: '刘世鹏'},
                    {value: '张曦'},
                    {value: '谢嘉猛'},
                    {value: '王向阳'},
                    {value: '吴奇荣'},
                    {value: '曾俊杰'},
                    {value: '陈煜凯'},
                    {value: '刘明'},
                    {value: '华晓健'},
                ],
                data: {
                    totalSize: 9,
                    content: [
                        {
                            createdAt: '2020-02-13',
                            issueFinder: '雷雨 ',
                            issueProducer: '雷雨 ',
                            issueDesc: '短视频运营业绩提成结算问题',
                            issueCase: '短视频运营业绩提成结算问题',
                            task: '关联任务'
                        },
                        {
                            createdAt: '2020-02-13',
                            issueFinder: '雷雨 ',
                            issueProducer: '雷雨 ',
                            issueDesc: '短视频运营业绩提成结算问题',
                            issueCase: '短视频运营业绩提成结算问题',
                            task: '关联任务'
                        },
                        {
                            createdAt: '2020-02-13',
                            issueFinder: '雷雨 ',
                            issueProducer: '雷雨 ',
                            issueDesc: '短视频运营业绩提成结算问题',
                            issueCase: '短视频运营业绩提成结算问题',
                            task: '关联任务'
                        },
                        {
                            createdAt: '2020-02-13',
                            issueFinder: '雷雨 ',
                            issueProducer: '雷雨 ',
                            issueDesc: '短视频运营业绩提成结算问题',
                            issueCase: '短视频运营业绩提成结算问题',
                            task: '关联任务'
                        },
                        // {
                        //     date:'2020-02-13',
                        //     question:'雷雨 ',
                        //     desc:'短视频运营业绩提成结算问题',
                        //     case:'短视频运营业绩提成结算问题',
                        //     cost:'200.00'
                        // },
                        // {
                        //     date:'2020-02-13',
                        //     question:'雷雨 ',
                        //     desc:'短视频运营业绩提成结算问题',
                        //     case:'短视频运营业绩提成结算问题',
                        //     cost:'200.00'
                        // },
                        {
                            createdAt: '2020-02-13',
                            issueFinder: '雷雨 ',
                            issueProducer: '雷雨 ',
                            issueDesc: '短视频运营业绩提成结算问题',
                            issueCase: '短视频运营业绩提成结算问题',
                            task: '关联任务'
                        },

                        {
                            createdAt: '2020-02-13',
                            issueFinder: '雷雨 ',
                            issueProducer: '雷雨 ',
                            issueDesc: '短视频运营业绩提成结算问题',
                            issueCase: '短视频运营业绩提成结算问题',
                            task: '关联任务'
                        },
                    ]
                },
                pageRequest: {
                    pageNum: 1,
                    pageSize: 10
                },
                columns: [
                    {prop: 'createdAt', label: '日期', sortable: true, fixed: 'left'},
                    {prop: 'issueFinder', label: '问题发现者'},
                    {prop: 'issueProducer', label: '问题产生者'},
                    {prop: 'task', label: '关联任务'},
                    {prop: 'issueDesc', label: '问题描述'},
                    {prop: 'issueCase', label: '解决方案'},
                ],
            }
        },
        methods: {
            findPage(pageNum) {
                if(pageNum){
                    this.pageRequest.pageNum=pageNum;
                }
                var pageRequest=Object.assign({},this.pageRequest)
                pageRequest.params=this.accFilters;
                axios({
                    method: 'post',
                    url: 'http://10.11.12.216:8009/issueLog/findIssueLogPage',
                    data: pageRequest
                })
                    .then((response)=>{
                        this.data = response.data.data
                    });
            }
        },
        mounted() {
            // this.findPage();
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

<style scoped lang="scss">

  .pageContainer {
    padding-bottom: 50px;
    text-align: left;
  }

  .altitle {
    margin-top: 50px;
  }

  .search {
    margin-top: 20px;
    margin-right: 20px;
    display: inline-block
  }
</style>
