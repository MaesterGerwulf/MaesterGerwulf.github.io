let areSrcsSet = false;

function onloadd()
{
  if (window.innerWidth > 1350)
  {
    setSrcs()
    changeSeason();
  }

  console.log("onload");

  // Lazy Preload
  changeDreams();
  changeRooms();

  let photo_2_1 = new Image();
  let photo_2_2 = new Image();
  let photo_2_3 = new Image();
  let photo_2_4 = new Image();
  let photo_2_5 = new Image();
  let photo_2_6 = new Image();
  photo_2_1.src = "images/photos/photo_2_1.webp"
  photo_2_2.src = "images/photos/photo_2_2.webp"
  photo_2_3.src = "images/photos/photo_2_3.webp"
  photo_2_4.src = "images/photos/photo_2_4.webp"
  photo_2_5.src = "images/photos/photo_2_5.webp"
  photo_2_6.src = "images/photos/photo_2_6.webp"

  var tag = document.createElement("script");
  tag.src = "js/lightbox-plus-jquery.min.js";
  tag.onload = function() {
    lightbox.option({'imageFadeDuration': 0,'resizeDuration': 0,'disableScrolling': true});
  }
  document.getElementsByTagName("head")[0].appendChild(tag);

  
}

window.addEventListener("resize", () => 
{
  console.log("resize");
  if (!areSrcsSet && window.innerWidth > 1350)
  {
    setSrcs()
    changeSeason();
  }
})

function setSrcs()
{
  let products = document.getElementsByClassName("product");
  console.log("setSrcs");
    
  areSrcsSet = true;

  for (let i = 0; i < products.length; i++)
    products[i].src = products[i].getAttribute("data-src");
}