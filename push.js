var push = require('web-push');

let vapidkey = {
    publicKey: 'BB3yXZXEXdxhPyNEPOczEn1N-zzyyKOVlsxjk2-htL-AT7H2ip-tbE26GNpcx0zNMK06V8BliWWka7vzRqLfYpA',
    privateKey: 'bkYj0wqAIF3zHiV4spGjdLCiEVxQFz28CswVYXUCoag'
  }


  push.setVapidDetails('mailto:mirzaaahsan@gmail.com', vapidkey.publicKey,vapidkey.privateKey)

  let sub = 
  {endpoint:`https://fcm.googleapis.com/fcm/send/evZihAkrV0E:APA91bGBmvvPNOz08LfBA0Fj386GSZHKzvtkl6kCvInTy30zUSpTyZrQ9jG28LDfjW2heeA9ORK9JLNLYoFAddXfzW3LcuCYnfmvCZxFqazaieAnmMnx_sgSjqyHs3iOOkUtUIP5Dsf9`,
  expirationTime:null,
  keys:{
    p256dh:'BLwr-1UVnYopDJIsO2V1VRNcvBtSAvWlLdSP96PdchcSN7kbLOqc35bL_5rS681dBCKn9Z2YXZYidT2pN41qAvM',
  auth:'hbIQiyhVRb4aZlZKl2CUpQ'}}

  push.sendNotification(sub,'test message');
  console.log(  push.sendNotification(sub,'test message'),'okk')