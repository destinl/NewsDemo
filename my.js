// pages/my/my.js
var common = require('../../utils/common.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        /*nickName:'未登录',
        src:'/images/index.png'
        newsList:[{
            id: '264698',
            title: '省退役军人事务厅来校交流对接工作',
            poster: 'https://gaopursuit.oss-cn-beijing.aliyuncs.com/2022/newsimage1.jpg',
            content: ' 8月19日，省退役军人事务厅二级巡视员蔡元和、办公室主任刘恒贵、就业创业处副处长钟俊武一行来校就联合共建安徽退役军人学院事宜进行交流对接。校党委常委、副校长陆林，芜湖市退役军人事务局党组成员、副局长张桂芬，学校办公室、人事处、教务处、招就处、学生处、研究生院、体育学院负责同志参加会议。',
            add_date: '2022-08-19'
        }]*/
    },

    goToDetail:function(e){
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: '../detail/detail?id='+id
        })
    },

    getMyInfo:function(e){
        wx.getUserProfile({
            desc: '展示用户信息',
            success: (res) => {
                console.log(res)
                this.setData({
                isLogin:true,
                src:res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName
                })
                this.getMyFavorites();
            }
        })
        //console.log(e.detail.userInfo)
    },

    getMyFavorites:function(){
        let info = wx.getStorageInfoSync();
        let keys = info.keys;
        let num = keys.length;

        let myList = [];
        for(var i = 0; i < num; i++){
            let obj = wx.getStorageSync(keys[i]);
            myList.push(obj);
        }

        this.setData({
            newsList:myList,
            num:num
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        if (wx.getUserProfile) {
            this.setData({
              canIUseGetUserProfile: true
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow:function() {
        if(this.data.isLogin){
            this.getMyFavorites()
        }
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})