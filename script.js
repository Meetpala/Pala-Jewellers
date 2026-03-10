
const images = [

"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
"https://images.unsplash.com/photo-1617038220319-276d3cfab638",
"https://images.unsplash.com/photo-1608042314453-ae338d80c427",
"https://images.unsplash.com/photo-1611652022419-a9419f74343d",
"https://images.unsplash.com/photo-1611591437281-460bfbe1220a"

];

let index = 0;

function changeImage(){

index++;

if(index >= images.length){
index = 0;
}

document.getElementById("jewelImage").src = images[index];

}

setInterval(changeImage,10000);