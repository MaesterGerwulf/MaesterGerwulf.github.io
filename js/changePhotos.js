let offwhite = "#FCFBFA";
  let brown = "#664332";
  let cyan = "#4FC1B7";

  change_photos_btn_1.addEventListener("mouseover", (evt) => {
     change_photos_hand_1.style.visibility = "hidden";
  })
  change_photos_btn_1.addEventListener("mouseout", (evt) => {
    change_photos_hand_1.style.visibility = "visible";
  })
  change_photos_btn_1.addEventListener("mousedown", (evt) => {
    change_photos_btn_1.style.color = cyan;
  })
  change_photos_btn_1.addEventListener("mouseup", () => {
    change_photos_btn_1.style.color = offwhite;
    changePhotos();
  })
  
  change_photos_btn_2.addEventListener("mouseover", () => {
    change_photos_hand_2.style.visibility = "hidden";
  })
  change_photos_btn_2.addEventListener("mouseout", () => {
    change_photos_hand_2.style.visibility = "visible";
  })
  change_photos_btn_2.addEventListener("mousedown", (evt) => {
    change_photos_btn_2.style.color = cyan;
  })
  change_photos_btn_2.addEventListener("mouseup", () => {
    change_photos_btn_2.style.color = offwhite;
    changePhotos();
  })

  change_dreams_btn_1.addEventListener("mouseover", () => {
    change_dreams_hand_1.style.visibility = "hidden";
  })
  change_dreams_btn_1.addEventListener("mouseout", () => {
    change_dreams_hand_1.style.visibility = "visible";
  })
  change_dreams_btn_1.addEventListener("mousedown", () => {
    change_dreams_btn_1.style.color = brown;
  })
  change_dreams_btn_1.addEventListener("mouseup", () => {
    change_dreams_btn_1.style.color = offwhite;
    changeDreams();
  })

  change_dreams_btn_2.addEventListener("mouseover", () => {
    change_dreams_hand_2.style.visibility = "hidden";
  })
  change_dreams_btn_2.addEventListener("mouseout", () => {
    change_dreams_hand_2.style.visibility = "visible";
  })
  change_dreams_btn_2.addEventListener("mousedown", () => {
    change_dreams_btn_2.style.color = brown;
  })
  change_dreams_btn_2.addEventListener("mouseup", () => {
    change_dreams_btn_2.style.color = offwhite;
    changeDreams();
  })

  change_rooms_btn_1.addEventListener("mouseover", (evt) => {
     change_rooms_hand_1.style.visibility = "hidden";
  })
  change_rooms_btn_1.addEventListener("mouseout", (evt) => {
    change_rooms_hand_1.style.visibility = "visible";
  })
  change_rooms_btn_1.addEventListener("mousedown", (evt) => {
    change_rooms_btn_1.style.color = cyan;
  })
  change_rooms_btn_1.addEventListener("mouseup", () => {
    change_rooms_btn_1.style.color = offwhite;
    changeRooms();
  })
  
  change_rooms_btn_2.addEventListener("mouseover", () => {
    change_rooms_hand_2.style.visibility = "hidden";
  })
  change_rooms_btn_2.addEventListener("mouseout", () => {
    change_rooms_hand_2.style.visibility = "visible";
  })
  change_rooms_btn_2.addEventListener("mousedown", (evt) => {
    change_rooms_btn_2.style.color = cyan;
  })
  change_rooms_btn_2.addEventListener("mouseup", () => {
    change_rooms_btn_2.style.color = offwhite;
    changeRooms();
  })

  let photoIndex = 0;
  let dreamIndex = 0;
  let roomIndex = 0;

  let frameNums = [[4, 2, 4, 5, 3, 4], [6, 2, 5, 6, 4, 6], [4, 4, 2, 3, 2, 7], [5, 1, 3, 2, 1, 8]]
  
  function changePhotos()
  {
    let sidePhotoDivs = document.getElementsByClassName("side_photo_div");
    let sidePhotos = document.getElementsByClassName("side_photo");
    photoIndex = (photoIndex + 1) % 4

    for (let i = 0; i < 6; i++)
    {
      sidePhotos[i].src = "images/photos/photo_" + (photoIndex + 1) + '_' + (i + 1) + ".png";
      let frameNum = frameNums[photoIndex][i];
      sidePhotoDivs[i].style.backgroundImage = "url(images/Frame_" + frameNum + ".svg)";
    }
  }
  function changeDreams()
  {
    let sideDreams = document.getElementsByClassName("side_photo_dream");
    dreamIndex = (dreamIndex + 1) % 4

    for (let i = 0; i < 6; i++)
      sideDreams[i].src = "images/dreams/dream_" + (dreamIndex + 1) + '_' + (i + 1) + ".png";
  }
  function changeRooms()
  {
    let sideRooms = document.getElementsByClassName("side_photo_rooms");
    roomIndex = (roomIndex + 1) % 4

    for (let i = 0; i < 6; i++)
      sideRooms[i].src = "images/rooms/room_" + (roomIndex + 1) + '_' + (i + 1) + ".png";
  }
