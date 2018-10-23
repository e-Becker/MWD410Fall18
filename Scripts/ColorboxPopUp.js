var lastFocus;
function onPopupOpen(){
    $("#myInput").focus();
}
//returns back to users previous location when they click outside of the popup
function onPopupClose(){
    Cookies.set('colorboxShown', 'yes', { expires: 1 });
    lastFocus.focus();
}
//Edit this for HTML, CSS is edited through .PopUpWindow
function displayPopup(){
    $.colorbox({
        html:"<h2> Please sign up to be notified about latest releases!</h2> <form> Email:<br> <input type='text' name='email'><br><br> <input type='submit' value='submit'</form>",
        className: "PopUpWindow",
        width: 450,
        height: 350,
        onComplete: onPopupOpen,
        onClosed: onPopupClose
    });
}
//This creates a cookie so that users do not get the popup every time they visit the page: DISABLED TEMPORARILY
setTimeout(function(){
    var popupShown = Cookies.get('colorboxShown');
    if(popupShown){
        console.log("Cookie found. No action necessary");
    } else {
        lastFocus = document.activeElement;
        displayPopup();
    }
}, 2000);