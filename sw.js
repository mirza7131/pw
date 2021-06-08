self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from a push notification!',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '10'
      },
      notification: {
        data: { url: 'http://www.youtube.com/funofheuristic' },
        title: 'Fun Of Heuristic',
        vibrate: [100, 50, 100],
      },
      actions: [
        {action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    const payLoad = {
      notification: {
        data: { url: 'http://www.youtube.com/funofheuristic' },
        title: 'Fun Of Heuristic',
        vibrate: [100, 50, 100],
      },
    };
    e.waitUntil(
      self.registration.showNotification('Hello Aneeb babar..! Why are you sleeping..?', options,JSON.stringify(payLoad))
    );
    var action = e.action;

  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('http://www.google.com');
      notification.close();
    }
   
  });

