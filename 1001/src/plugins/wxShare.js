import wx from 'weixin-js-sdk' //微信sdk
import { getWxTicket } from '@/api/wx'
export default function wxShareConfig(title, desc, link, imgUrl) {
  getWxTicket({ url: location.href }).then((res) => {
    console.log(res)
    if (res.errmsg) {
      throw Error('getWxTicket fail')
    }
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: res.appId, // 必填，公众号的唯一标识
      timestamp: res.timestamp, // 必填，生成签名的时间戳
      nonceStr: res.nonceStr, // 必填，生成签名的随机串
      signature: res.signature, // 必填，签名，见附录1
      jsApiList: [
        'checkJsApi',
        'updateTimelineShareData',
        'updateAppMessageShareData',
        // "chooseImage",
        // "getLocalImgData"
      ], // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
    wx.ready(function () {
      console.log('wx ready')
      wx.checkJsApi({
        jsApiList: [
          'updateTimelineShareData',
          'updateAppMessageShareData',
          'chooseImage',
        ],
        success: function (res) {
          console.log(res)
        },
      })
      wx.updateAppMessageShareData({
        title: title, // 分享标题
        desc: desc, // 分享描述
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        type: 'link', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          console.log('分享成功')
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        },
      })
      wx.updateTimelineShareData({
        title: title, // 分享标题
        link: link, // 分享链接
        imgUrl: imgUrl, // 分享图标
        success: function () {
          console.log('分享成功')
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        },
      })
    })
    wx.error(function (res) {
      // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
      console.log(res)
    })
  })
}
