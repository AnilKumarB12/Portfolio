
//this function is used to open the tab and add to activate the tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

//this function changes the color of the nav link when it its clicked
function changeLinkColor(clickedLink) {
    // Remove 'clicked' class from all links
    var allLinks = document.querySelectorAll('.nav-link');
    allLinks.forEach(function(link) {
    link.classList.remove('clicked');
    });
    // Add 'clicked' class to the clicked link
    //clickedLink = a;
    clickedLink.classList.add('clicked');
}


//these functions are used for closing and opening menu bar on small screens
var sideMenu = document.getElementById("sidemenu");

function openmenu() {
    sideMenu.style.right = "0";
}
function closemenu() {
    sideMenu.style.right = "-200px";
}


//this function is used to stor the form data into google sheets on submit event
const scriptURL = 'https://script.google.com/macros/s/AKfycbzmI_JtiV6qDhJXM_Y8tok-sAryiZxBs7E8Y1MCJu0qSMbnnK1oraLhmx61Z3WtIGij_Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            //to hide msg after 5seconds
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            //to clear the input field
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})


