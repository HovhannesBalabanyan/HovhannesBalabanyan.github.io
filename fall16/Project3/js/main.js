function toggle5(showHideDiv, switchImgTag) {
        var ele = document.getElementById(showHideDiv);
        var imageEle = document.getElementById(switchImgTag);
        if(ele.style.display == "block") {
                ele.style.display = "none";
		imageEle.innerHTML = '<img src="/wp-includes/images/plus.png">';
        }
        else {
                ele.style.display = "block";
                imageEle.innerHTML = '<img src="/wp-includes/images/minus.png">';
        }
}