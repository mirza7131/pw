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
        {action: 'https://www.google.com/', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello Umar..! What are you doing..?', options)
    );
  });