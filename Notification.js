//check browser support
function createNotification () {
if (!('Notification' in window)) {
    throw new Error('Browser doesn\'t support notifications');
    }
//check for permission
    switch (Notification.permission) {
        case 'granted': {
            new Notification(notificationProps.title, notificationProps);
            break;
        }
        case 'denied': {
            console.log('User closed the request pop-up/was already denied.');
            break;
        }
        case 'default': {
            Notification.requestPermission((permission) => {
                if (permission === 'granted') {
                    new Notification(notificationProps.title, notificationProps);
                }
                alert('Request denied.');
            });
        }
    }
}

const notificationProps = {
    title: 'Hello!',
    body: 'Would you like to sign up for future recommendations and our monthly newsletter? -Button Placeholder-',
    icon: 'https://ideacenter.nd.edu/assets/244031/irisrec_icon_250.jpg'
}



}
function closeNotification(notifyID, time) {
    if (notifyID instanceof Notification) {
        setTimeout(() => {
            notifyID.close();
            }, time);
    }
}

function notifyOnClick = () => {
    console.log('Notification has been clicked.');
}
const notification = Notification('')
notification.onclick = notifyClicked;


closeNotification(myNotification, 10000);

}