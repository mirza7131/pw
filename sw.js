self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from a push notification!',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '10'
      },
      actions: [
        {action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello Aneeb babar..! Why are you sleeping..?', options)
    );
  });

  var action = e.action;

  
  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.google.com');
    notification.close();
  }
  clients.openWindow('http://www.google.com');