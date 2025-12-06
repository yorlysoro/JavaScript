//Modified Images and Text Content
const img1 = document.getElementById("img1");
img1.src = "https://via.placeholder.com/150/0000FF/808080?Text=NewImage1";
img1.alt = "New Image 1";

const img2 = document.getElementById("img2");
img2.src = "https://via.placeholder.com/150/FF0000/FFFFFF?Text=NewImage2";
img2.alt = "New Image 2";

const img3 = document.getElementById("img3");
img3.src = "https://via.placeholder.com/150/00FF00/000000?Text=NewImage3";
img3.alt = "New Image 3";

const paragraph = document.getElementById("text");
paragraph.textContent = "This is the updated text content for the paragraph element.";
console.log(img1, img2, img3, paragraph);