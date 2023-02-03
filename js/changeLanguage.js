function changeLanguageTo(lang)
{
  if (lang == "ge")
  {
    ge_button.disabled = true;
    en_button.disabled = false;
    olala_txt_en.innerHTML = "ლორემ იპსუმ";
    olala_txt_en.id = "olala_txt_ge";
    and_life_begins_txt_en.innerHTML = "... და სიცოცხლე იწყება ...";
    and_life_begins_txt_en.id = "and_life_begins_txt_ge";
    
    let ourBrands = document.getElementsByClassName("our_brands_txt");
    for (let i = 0; i < ourBrands.length; i++)
    {
      ourBrands[i].innerHTML = "ჩვენი ბრენდები";
      ourBrands[i].classList.remove = "our_brands_txt_en";
      ourBrands[i].classList.add = "our_brands_txt_ge";
    }

    let photosBtn = document.getElementsByClassName("change_photos_btn");
    for (let i = 0; i < ourBrands.length; i++)
    {
      if (photosBtn[i].classList.contains("change_dreams_btn"))
        photosBtn[i].children[0].innerHTML = "შეცვალე სიზმრები";
      else if (photosBtn[i].classList.contains("change_rooms_btn"))
        photosBtn[i].children[0].innerHTML = "შეცვალე ოთახები";
      else if (photosBtn[i].classList.contains("change_seasons_btn"))
        photosBtn[i].children[0].innerHTML = "შეცვალე სეზონები";
      else
        photosBtn[i].children[0].innerHTML = "შეცვალე ფოტოები";
        
      photosBtn[i].classList.remove = "change_photos_btn_en";
      photosBtn[i].classList.add = "change_photos_btn_ge";
    }

    
  }
  else if (lang == "en")
  {
    en_button.disabled = true;
    ge_button.disabled = false;
    olala_txt_ge.innerHTML = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam";
    olala_txt_ge.id = "olala_txt_en";
    and_life_begins_txt_ge.innerHTML = "... and life begins ..."
    and_life_begins_txt_ge.id = "and_life_begins_txt_en";

    let ourBrands = document.getElementsByClassName("our_brands_txt");
    for (let i = 0; i < ourBrands.length; i++)
    {
      ourBrands[i].innerHTML = "Our Brands";
      ourBrands[i].classList.remove = "our_brands_txt_ge";
      ourBrands[i].classList.add = "our_brands_txt_en";
    }

    let photosBtn = document.getElementsByClassName("change_photos_btn");
    for (let i = 0; i < ourBrands.length; i++)
    {
      if (photosBtn[i].classList.contains("change_dreams_btn"))
        photosBtn[i].children[0].innerHTML = "CHANGE DREAMS";
      else if (photosBtn[i].classList.contains("change_rooms_btn"))
        photosBtn[i].children[0].innerHTML = "CHANGE ROOMS";
      else if (photosBtn[i].classList.contains("change_seasons_btn"))
        photosBtn[i].children[0].innerHTML = "CHANGE SEASONS";
      else
        photosBtn[i].children[0].innerHTML = "CHANGE PHOTOS";

      photosBtn[i].classList.remove = "change_photos_btn_ge";
      photosBtn[i].classList.add = "change_photos_btn_en";
    }
  }
}