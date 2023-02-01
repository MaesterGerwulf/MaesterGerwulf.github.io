showcase_1.addEventListener("click", (evt) => changeLargeItem(evt, "showcase_1"))
  showcase_2.addEventListener("click", (evt) => changeLargeItem(evt, "showcase_2"))

  showcase_1.addEventListener("mouseover", (evt) => scaleDown(evt))
  showcase_1.addEventListener("mouseout", (evt) => scaleBack(evt))
  showcase_2.addEventListener("mouseover", (evt) => scaleDown(evt))
  showcase_2.addEventListener("mouseout", (evt) => scaleBack(evt))

  function changeLargeItem(evt, showcaseName)
  {
    if (evt.target.classList[0] == "showcase_item")
    {
      let preloadImage = new Image();
      preloadImage.src = "images/showcase_items/" + evt.target.alt + "_270.png";

      let largeItem = document.getElementById(showcaseName + "_large_item");
      largeItem.style.transform = "scale(0)";
      setTimeout(() => 
      {
        document.getElementById(showcaseName + "_item_name").innerHTML = evt.target.name;
        largeItem.src  = "images/showcase_items/" + evt.target.alt + "_270.png";
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
