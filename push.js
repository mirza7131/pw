var push = require('web-push');

let vapidkey = {
    publicKey: 'BB3yXZXEXdxhPyNEPOczEn1N-zzyyKOVlsxjk2-htL-AT7H2ip-tbE26GNpcx0zNMK06V8BliWWka7vzRqLfYpA',
    privateKey: 'bkYj0wqAIF3zHiV4spGjdLCiEVxQFz28CswVYXUCoag'
  }


  push.setVapidDetails('mailto:mehranansar564@gmail.com', vapidkey.publicKey,vapidkey.privateKey)

  let sub =
  // ahsan 
 {
    endpoint:"https://fcm.googleapis.com/fcm/send/e7Ed1d0yb7s:APA91bHpaSDxLV7W4U6l79IQLm8v6eynLSuc-ahMxBKt1_ChOFmm02EmS_4SQDS_R8BqDIF_RN2lMOFgaGWLNTE8q9toNf2BEyZiATbNvEYMxqJAtJiA3IaD82r8Ri8tHj9O9SBwgZ6k",
  expirationTime:null,
  keys:{p256dh:"BPVGrmIdkoMugyIy7edDua7u4XsJbtfI05ZlK5A9hUc2R9gwNFW5IzhCoCGOi8W1hvEixmDxr6boEmgMqnkrKPo",
  auth:"jEit-PDOv7lY4WJurrdxJg"}}

// //usman
// {endpoint:"https://fcm.googleapis.com/fcm/send/dOvxbXf6ues:APA91bHavGY4pdQvOg5MhkXiSkyktXSKbcAP1Rt9VPPb64oE9kFEz0WgTobKn7Duo5m3XHDSo8W2n2MNZ1Rxysj_2PCYaGcGZVzwpmXh1mC2f-hC5gPGQlVWUtYkpaXgDU6bduUyndq6",
// expirationTime:null,keys:{p256dh:"BMDTwlkC1CKbHn7_jfWB90qGsmnFQJTUVkwQryKFeXFkoKBva6YkF2UD2bFzCn_qzAFBI8b9dqWnohfUsr_JmN8",
// auth:"EVO-teyxna--NVyF8biaqA"}}

  ///// mehran
  // {endpoint:"https://fcm.googleapis.com/fcm/send/eId2AYwiu1A:APA91bHrceYFGJQjxVC87LHotgv85ynCtNU4ZKiJo1CMUZm4_RyTQxsvrWl72gQdKvGq21Xhno_aSuwZosLeRKW4HHdABGx6a5_X6AfQdEgK-sYiigTryptWY6gEtiA6quPMc0iqKbE1",
  // expirationTime:null,
  // keys:{
  //   p256dh:"BHp5gQPtQiRk5ENn-BLNl1KFvDM5Wc7gtzk_sqWk2xVnkFqBcXI43vffWYzOIfZcNUtJ7aUXv92JbbvEFu9vMCg",
  // auth:"J18GLXedVibv7LT1mQi7OQ"}}

  ///umar
  // {endpoint:"https://wns2-sg2p.notify.windows.com/w/?token=BQYAAADreEde5r4%2fO7vj3XyuTYmLGuFraBGjA3YudSIucYLUnJA3Th%2foKeSmJf9p9mLDw0SnAoyyoD4vqTRBnOpFJ%2bzGGrlKlZOi7bsZ4Fh%2bVoUeEj9wAfW6OtVUcoehtNR%2b2adeiH9tSjuC5oy%2bEIASWSW0FoDPeWsr8sRRfhZpjSOHjzJtag6y72kmLWtw%2ff3DlJqqQSSKjyjA1qr7LYOkj4%2bw9975T4x69BmmPUTtnTG4JlVjPlI%2bNIPKKapdVwqMn5D%2bfyS9BR7KjJn5Z4BdpOdh9FXjvi%2fViLh8bwQPVqQ0y5ybvXhlDLgWZbePMDIOXOzeL9tK2%2fXQN2tyzbiC%2b9KV",
  // expirationTime:null,
  // keys:
  // {
  //   p256dh:"BE_SPprsHQ_54Rt6ZqD5TCEJUXQSSQ96poups-XoNhRJmiRXhZYTS9DqOvF3g0pE6RMe6Qjmz9EJlqYOlR3S2go",
  // auth:"7VJY9OknMG0xydtIkQLZfQ"}}

  push.sendNotification(sub,'test message');
  console.log(  'okk')