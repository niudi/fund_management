<template>
  <div class="box">
    <!--上方查询的条件-->
    <div class="queryCondition">

      <el-form :inline="true" :model="formInline" class="demo-form-inline">


        <el-form-item label="手机号:"  size="mini" style="text-align: left;margin-left: 10px;">
          <el-input v-model="formInline.tel" placeholder="手机号"  style="width:120px;"></el-input>
        </el-form-item>

        <el-form-item label="会员名称:" size="mini" style="text-align: left;">
          <el-input v-model="formInline.userName" placeholder="会员名称" style="width:100px;"></el-input>
        </el-form-item>

        <el-form-item label="身份证号:" size="mini" style="text-align: left;">
          <el-input v-model="formInline.cardId" placeholder="身份证号" style="width:200px;"></el-input>
        </el-form-item>



        <el-form-item label="投资状态:" size="mini" style="text-align: left;">
          <el-select v-model="formInline.investState" placeholder="投资状态" style="width:100px;">
            <el-option label="全部" value="all"></el-option>
            <el-option label="已投资" value="yes"></el-option>
            <el-option label="未投资" value="no"></el-option>
          </el-select>
        </el-form-item>


        <el-form-item label="开户状态:" size="mini" style="text-align: left;">
          <el-select v-model="formInline.openAccState" placeholder="开户状态" style="width:100px;">
            <el-option label="全部" value="all"></el-option>
            <el-option label="已开户" value="yes"></el-option>
            <el-option label="未开户" value="no"></el-option>
          </el-select>
        </el-form-item>



        <el-form-item size="mini" style="text-align: left;">
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>

        <el-form-item size="mini" style="text-align: left;">
          <el-button type="danger" @click="onReset">重置</el-button>
        </el-form-item>


      </el-form>
    </div>
    <div class="queryContent">

      <el-table
        stripe
        :data="tableData5"
        style="width: 100%">
        <el-table-column type="expand">

          <template slot-scope="props">

            <el-form label-position="left" inline class="demo-table-expand">

              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>

            </el-form>

          </template>

        </el-table-column>
        <el-table-column
          label="商品 ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="desc">
        </el-table-column>
      </el-table>


    </div>
    <div class="queryPage">
      <div class="block">
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :page-size="15"
          layout="total, prev, pager, next"
          :total="pageNum">
        </el-pagination>
      </div>
    </div>
  </div>
</template>



<script>
  export default {
    name: 'userInvest',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeIndex: '1',
        activeIndex2: '1',
        level:'管理员',
        userName:'张益达',
        pageNum:10000,
        idcardShow:false,
        formInline: {
          tel: '',
          userName: '',
          cardId: '',
          investState:'',
          openAccState:''
        },
        tableData5: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },
    mounted(){

    },
    methods: {

      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },

      onSubmit() {
        console.log(this.formInline);
      },
      onReset(){
        this.formInline={
          tel: '',
          userName: '',
          cardId: '',
          investState:'',
          openAccState:''
        }
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
  }
  .box{
    width: 100%;
    height: 100%;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
    overflow: hidden;
  }
  .top{
    width: 100%;
    height: 60px;
    background: #ccc;
    position: fixed;
    left: 0;
    top: 0;
    overflow: hidden;

  }
  .logo{
    width: 12%;
  }
  /*个人信息*/
  .userInfo{
    position: absolute;
    right: 20px;
    top:0;

  }
  .bigIcon{
    position: absolute;
    left: 10px;
    top:19px;
  }
  .bigTitle{
    display: block;
    position: absolute;
    left: 45px;
    top: 0;
  }

  .center{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    position: fixed;
    left: 0;
    top: 60px;
  }

  .centerLeft{
    width: 12%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #ccc;
  }
  .tac{
    width: 100%;
    height: 100%;
    /*margin-top: 10px;*/
    background: #545c64;
  }
  .tac .el-col {
    width: 100%;
    height: 100%;
  }
  .centerRight{
    width: 88%;
    height: 100%;
    margin-left: 12%;
    background: #e0e0e0;
    overflow: scroll;
  }
  /*中间的查询条件*/
  .queryCondition{
    width: 99%;
    /*height: 10%;*/
    margin-left: 0.5%;
    margin-top: 0.5%;
    border:1px solid #FFFFFF;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius:10px;
  }
  .queryCondition form{
    height: 100%;
  }

  .el-form-item{
    margin: 0;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;


  }


  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }



  /*查询的结果*/
  .queryContent{
    width: 99%;
    height:75%;
    margin-left: 0.5%;
    margin-top: 1%;
    border:1px solid #FFFFFF;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius:10px;
    overflow: scroll;
  }
  /*查询的分页*/
  .queryPage{
    width: 99%;
    margin-left: 0.5%;
    margin-top: 0.5%;
    border:1px solid #FFFFFF;
    background: #FFFFFF;
    box-sizing: border-box;
    border-radius:10px;
  }
  .queryPage .block,.queryPage .block div{
    margin-top:10px;
    margin-bottom:10px;
  }


</style>


