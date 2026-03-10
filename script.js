
const images = [

"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
"https://images.unsplash.com/photo-1617038220319-276d3cfab638",
"https://images.unsplash.com/photo-1608042314453-ae338d80c427",
"https://images.unsplash.com/photo-1611652022419-a9419f74343d",
"https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
"https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
"https://images.unsplash.com/photo-1605100804763-247f67b3557e",
"https://images.unsplash.com/photo-1596944924616-7b38e7cfac36"

];

let index = 0;

function updateImage(){
document.getElementById("jewelImage").src = images[index];
}

function changeImage(){
index = (index + 1) % images.length;
updateImage();
}

function prevImage(){
index = (index - 1 + images.length) % images.length;
updateImage();
}

document.getElementById('prevBtn').addEventListener('click', prevImage);
document.getElementById('nextBtn').addEventListener('click', changeImage);

setInterval(changeImage,7000);