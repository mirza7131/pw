var push = require('web-push');

let vapidkey = {
    publicKey: 'BB3yXZXEXdxhPyNEPOczEn1N-zzyyKOVlsxjk2-htL-AT7H2ip-tbE26GNpcx0zNMK06V8BliWWka7vzRqLfYpA',
    privateKey: 'bkYj0wqAIF3zHiV4spGjdLCiEVxQFz28CswVYXUCoag'
  }


  push.setVapidDetails('mailto:test@code.co.uk', vapidkey.publicKey,vapidkey.privateKey)

  let sub = {};

  push.sendNotification(sub,'test message')