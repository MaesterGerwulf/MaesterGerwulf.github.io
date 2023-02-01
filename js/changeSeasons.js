let seasonIndex = -1;

  let season1 = ["Leclerc_Baby_Scene", "BeSafe_Scene", "JetKids_by_Stokke_Scene", "JetKids_by_Stokke_Scene_Kids_3",
                 "JetKids_by_Stokke_Scene_Kids", "Stokke_Xplory_X", "Stokke_Limas_Carrier", "JetKids_by_Stokke_Scene_Kids_2"];

  let season2 = ["Leclerc_Scene", "Stokke_Limas_Carrier_Plus_Scene_People", "JetKids_by_Stokke_Scene_People_2",
                 "JetKids_by_Stokke_Scene_Kids_4","JetKids_by_Stokke_Scene_People", "Stokke_Limas_Carrier_Flex_Scene_People",
                 "JetKids_by_Stokke_Scene_Kids_5", "Lecrec_Baby_Scene"];

  let season3 = ["Stokke_Xplory_X_Scene_People", "Stokke_Xplory_X_Scene_People_2","JetKids_by_Stokke_Scene_Kids_6",
                 "Bugaboo_Scene", "Stokke_Xplory_X_Scene_People_3"]

  let season4 = ["Lecrec_Baby_Scene_2", "BeSafe_Haven", "JetKids_by_Stokke_Scene_People_3",
                 "JetKids_by_Stokke_Scene_Kids_7", "JetKids_by_Stokke_Scene_People_4", "Stokke_Xplory_X_Scene People_4",
                 "JetKids_by_Stokke_Scene_Kids_8"]
  
  let seasons = [];
  seasons.push(season1);
  seasons.push(season2);
  seasons.push(season3);
  seasons.push(season4);
  
  changeSeason();

  change_season_btn.addEventListener("mouseover", () => {
    change_season_hand.style.visibility = "hidden";
  })
  change_season_btn.addEventListener("mouseout", () => {
    change_season_hand.style.visibility = "visible";
  })
  change_season_btn.addEventListener("mousedown", () => {
    change_season_btn.style.color = cyan;
  })
  change_season_btn.addEventListener("mouseup", () => {
    change_season_btn.style.color = offwhite;
    changeSeason();
  })

  function changeSeason()
  {
    let street = document.getElementById("street");

    street.innerHTML = "";

    seasonIndex = (seasonIndex + 1) % 4
    
    seasons[seasonIndex].forEach((name, i) =>
    {
      let image = new Image();
      image.src = "images/seasons/" + name + ".png";
      image.id = "street_img_" + (seasonIndex + 1) + '_' + (i + 1);
      image.classList.add("absolute");
      image.alt = name;
      street.appendChild(image);
    })

    // Preload
    seasons[seasonIndex].forEach((name, i) =>
    {
      let image = new Image();
      image.src = "images/seasons/" + name + ".png";
    })
  }