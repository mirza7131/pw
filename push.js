var push = require('web-push');

let vapidkey = {
    publicKey: 'BB3yXZXEXdxhPyNEPOczEn1N-zzyyKOVlsxjk2-htL-AT7H2ip-tbE26GNpcx0zNMK06V8BliWWka7vzRqLfYpA',
    privateKey: 'bkYj0wqAIF3zHiV4spGjdLCiEVxQFz28CswVYXUCoag'
  }


  push.setVapidDetails('mailto:mirzaaahsan@gmail.com', vapidkey.publicKey,vapidkey.privateKey)

  let sub = 
  {
    endpoint:"https://fcm.googleapis.com/fcm/send/e7Ed1d0yb7s:APA91bHpaSDxLV7W4U6l79IQLm8v6eynLSuc-ahMxBKt1_ChOFmm02EmS_4SQDS_R8BqDIF_RN2lMOFgaGWLNTE8q9toNf2BEyZiATbNvEYMxqJAtJiA3IaD82r8Ri8tHj9O9SBwgZ6k",
  expirationTime:null,
  keys:{p256dh:"BPVGrmIdkoMugyIy7edDua7u4XsJbtfI05ZlK5A9hUc2R9gwNFW5IzhCoCGOi8W1hvEixmDxr6boEmgMqnkrKPo",
  auth:"jEit-PDOv7lY4WJurrdxJg"}}

  push.sendNotification(sub,'test message');
  console.log(  push.sendNotification(sub,'test message'),'okk')