//app.js
App({
  onLaunch: function() {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // var moregz = false    
    // wx.setStorageSync('moregz', moregz)
    // wx.getUpdateManager().onCheckForUpdate(function(res) { // 请求完新版本信息的回调      
    //   console.log("是否有新版本：" + res.hasUpdate);
    //   if (res.hasUpdate) { //如果有新版本                
    //     // 小程序有新版本，会主动触发下载操作（无需开发者触发） 
    //     wx.getUpdateManager().onUpdateReady(function() {
    //       //当新版本下载完成，会进行回调          
    //       wx.showModal({
    //         title: '更新提示',
    //         content: '新版本已经准备好，单击确定重启应用',
    //         showCancel: false,
    //         confirmText: '确定',
    //         success: function(res) {
    //           if (res.confirm) {
    //             // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启           
    //             wx.getUpdateManager().applyUpdate();
    //           }
    //         }
    //       })
    //     }) // 小程序有新版本，会主动触发下载操作（无需开发者触发）        
    //     wx.getUpdateManager().onUpdateFailed(function() {
    //       //当新版本下载失败，会进行回调          
    //       wx.showModal({
    //         title: '提示',
    //         content: '检查到有新版本，但下载失败，请检查网络设置',
    //         showCancel: false,
    //       })
    //     })
    //   }
    // });
  },

  // globalData: {
  //   obj:""
  // },
  // onShow(options){
  //   console.log(options)
  //   this.globalData.obj = options.referrerInfo.extraData.channnel;
  // },
  post: function(url, data) {
    var promise = new Promise((resolve, reject) => {
      //init
      var that = this;
      var postData = data;
      /*
      //自动添加签名字段到postData，makeSign(obj)是一个自定义的生成签名字符串的函数
      postData.signature = that.makeSign(postData);
      */
      //网络请求
      wx.request({
        url: url,
        data: postData,
        method: 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res) { //服务器返回数据
          if (res.data.return_code == '200') {
            resolve(res.data);
          } else { //返回错误提示信息
            reject(res.data);
          }
        },
        error: function(e) {
          reject('网络出错');
        }
      })
    });
    return promise;
  },
})