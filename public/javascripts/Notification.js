//check browser support
function createNotification () {
    if (!('Notification' in window)) {
        throw new Error('Browser doesn\'t support notifications');
    }
//check for permission
    switch (Notification.permission) {
        case 'granted': {
            return secondaryCreateNotification;
            break;
        }
        case 'denied': {
            console.log('User closed the request pop-up/was already denied.');
            break;
        }
        case 'default': {
            Notification.requestPermission((permission) => {
                if (permission === 'granted') {
                    return secondaryCreateNotification;
                }
                alert('Request denied.');
            });
        }
    }
    function secondaryCreateNotification(notifProps) {
        const notif = new Notification(notifProps.title, notifProps);
        if (Number.isInteger(notifProps.closeTimeout)) {
            setTimeout(() => {
                notif.close();
            }, notifProps.timeout);
        }
    }
}

const handleNotif = createNotification();

const notifProps = {
    title: 'Hello!',
    body: 'Would you like to sign up for future recommendations and our monthly newsletter? -Button Placeholder-',
    icon: 'https://ideacenter.nd.edu/assets/244031/irisrec_icon_250.jpg',
    timeout: 10000
}

handleNotif(notifProps);
