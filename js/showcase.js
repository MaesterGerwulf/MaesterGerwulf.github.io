showcase_1.addEventListener("click", (evt) => changeLargeItem(evt, "showcase_1"))
showcase_2.addEventListener("click", (evt) => changeLargeItem(evt, "showcase_2"))

if (!hasTouch())
{
  showcase_1.addEventListener("mouseover", (evt) => scaleDown(evt))
  showcase_1.addEventListener("mouseout", (evt) => scaleBack(evt))
  showcase_2.addEventListener("mouseover", (evt) => scaleDown(evt))
  showcase_2.addEventListener("mouseout", (evt) => scaleBack(evt))
}


function changeLargeItem(evt, showcaseName)
{
  if (evt.target.classList[0] == "showcase_item")
  {
    let showcaseItems = document.getElementsByClassName("showcase_item");
    let startIndex = 0;

    if (showcaseName == "showcase_2")
      startIndex = 30;

    for (let i = startIndex; i < startIndex + 30; i++)
    {
      showcaseItems[i].style.outline = "none";
      showcaseItems[i].style.borderRadius = "0";
    }

    evt.target.style.outline = "1px solid var(--brown1)";
    evt.target.style.borderRadius = "8px";

    let preloadImage = new Image();
    preloadImage.src = "images/showcase/" + evt.target.alt + "_270.jpg";

    let largeItem = document.getElementById(showcaseName + "_large_item");
    largeItem.style.transform = "scale(0)";
    setTimeout(() => 
    {
      document.getElementById(showcaseName + "_item_name").innerHTML = evt.target.name;
      largeItem.src  = "images/showcase/" + evt.target.alt + "_270.jpg";
      largeItem.style.transform = "scale(1)";
    }, 1100);
  }
}
function scaleDown(evt) 
{
  if (evt.target.classList[0] == "showcase_item")
    evt.target.style.transform = "scale(0.9)";
}
function scaleBack(evt)
{
  if (evt.target.classList[0] == "showcase_item")
    evt.target.style.transform = "scale(1)";
}
