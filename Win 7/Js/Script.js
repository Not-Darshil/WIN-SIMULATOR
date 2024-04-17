
const showButton = document.getElementById('showSectionButton');
const hiddenSection = document.getElementById('hiddenSection');


showButton.addEventListener('click', function() {

    if (hiddenSection.style.opacity === '0') {
        hiddenSection.style.opacity = "1";
    } else {
        hiddenSection.style.opacity = "0";
    }
});
