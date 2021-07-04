/* All of the code in here is a part of the quality system that Ethan Wales (l3) helped me to set up. 
This system allows you to choose the quality of the image before they load, meaning that you have no broadband
issues. */

let imageQuality = localStorage.getItem("image-quality");

if (imageQuality) {
    if (imageQuality == "high") {
        for (const itemOfArray in [...document.getElementsByClassName("Splash")]) {
            document.getElementsByClassName("Splash")[itemOfArray].src = document.getElementsByClassName("Splash")[
                itemOfArray].src.slice(0, -4) + "High.png";
        }
    }
    window.onload = _ => {
        document.getElementById("loader").classList.add("hide");
    }

} else {
    window.location.href = `./image-quality-changer.html?lastpage=${window.location.pathname.split("/").pop()}`
}