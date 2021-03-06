// miniprogram/pages/post_video/post_video.js
const app=getApp()
var video;
var videoContext;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words_num:0,
    my_point:'',
    position:{"coordinates":[116.403991,39.915087],"type":"Point"},
    said:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    video=options.video;
    this.setData({video})
    videoContext=wx.createVideoContext('post_video1')
  },

  get_said(e){
    this.setData({
      said:e.detail.value,
      words_num:(e.detail.value).length
    })
  },

  get_point(){
    var that=this;
    wx.getSetting().then(res=>{
      //获取地理位置授权
      if(res.authSetting['scope.userLocation']){//已授权
        app.globalData.auth[2]=1
        that.get_location()
      }
      else{//未授权，申请授权
        wx.authorize({
          scope: 'scope.userLocation',
        }).then(res=>{//授权成功
          app.globalData.auth[2]=1
          that.get_location()
        }).catch(err=>{//授权失败
          app.cancel_auth('请打开设置页面进行授权','',(res=>{
            if(app.globalData.auth[2]==1){
              that.get_location()
            }
          }))
        })
      }
    })
  },
  get_location(){
    var that=this;
    wx.chooseLocation({
      success: function(res) {
        console.log("res",res)
        that.setData({
          my_point:res.name,
          position:{"coordinates":[res.longitude,res.latitude],"type":"Point"}
        });
      },
      fail: function(err) {
        console.log(err)
      }
    });
  },

  async post(){
    var that=this;
    //作品上传状态，用来在我的页面右下角展示作品上传图标
    app.globalData.tabbar_data.work_load_status='loading'

    wx.showToast({
      title: '已进入后台上传',
      icon:'none',
      duration:3000,
      success:res=>{
        setTimeout(() => {
          that.post2()
        },3000);
      }
    })
  },
  async post2(){
    wx.switchTab({
      url: '../index/index',
    })

    var title=this.data.said.replace(/\n/g,'')
    //var name='video---'+app.globalData.openid+'---'+title.substr(0,10);
    var name='video---'+app.globalData.openid

    var video_url=await app.upload_file([video],name,false)
    var data={
      video:video_url[0],
      title:title,
      point:this.data.my_point,
      position:this.data.position,
      user_nickName:app.globalData.userInfo.nickName,
      user_avatarUrl:app.globalData.userInfo.avatarUrl,
      liked:[],
      danmu_num:0
    }
    var res=JSON.parse(await app.add('video',data,false))

    app.globalData.tabbar_data.work_load_status=''

    if(res['errMsg']=='collection.add:ok'){
      wx.showToast({
        title:'作品发布成功！',
        success:res=>{
          setTimeout(() => {
            wx.reLaunch({
              url: '../my/my?nav=0',
            })
          }, 2000);
        }
      })
    }
    else{
      wx.showToast({
        title: '作品发布失败~',
        icon:'none',
        success:res=>{
          setTimeout(() => {
            wx.reLaunch({
              url: '../my/my?nav=0',
            })
          }, 2000);
        }
      })
    }
  }
  
})