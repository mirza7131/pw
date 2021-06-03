
self.addEventListener('push', function(e) {
    var options = {
        body: 'this notification was generated from push ',
        icon: 'images/checkmark.png',
        vibrate: [100, 50, 100],
        date: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore this new world',
                icone: 'images/checkmark.png'
            },
            { action: 'Close', title: 'Close' , icon: 'images/xmark.png'}
        ]
    };
    e.waitUntil(self.registration.showNotification('Hello world', options))
})