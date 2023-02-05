let currentLang = "en";

if (!hasTouch())
{
  lang_btn_en.addEventListener("mouseover", () => {
    if (currentLang != "en")
      lang_btn_en_flag.style.transform = "scale(1.1)";
  })
  lang_btn_en.addEventListener("mouseout", () => {
    lang_btn_en_flag.style.transform = "scale(1)";
  })

  lang_btn_ge.addEventListener("mouseover", () => {
    if (currentLang != "ge")
      lang_btn_ge_flag.style.transform = "scale(1.1)";
  })
  lang_btn_ge.addEventListener("mouseout", () => {
    lang_btn_ge_flag.style.transform = "scale(1)";
  })
}

lang_btn_en.addEventListener("click", () => 
{
  changeLanguageTo("en");
  lang_btn_en.style.outline = "1px solid var(--brown1)";
  lang_btn_ge.style.outline = "none";
  lang_btn_en.style.cursor = "auto"
  lang_btn_ge.style.cursor = "url('images/Hand_Cyan_Right.svg'), auto"
  lang_btn_en_flag.style.transform = "scale(1)";
})

lang_btn_ge.addEventListener("click", () => 
{
  changeLanguageTo("ge");
  lang_btn_ge.style.outline = "1px solid var(--brown1)";
  lang_btn_en.style.outline = "none";
  lang_btn_ge.style.cursor = "auto"
  lang_btn_en.style.cursor = "url('images/Hand_Cyan_Right.svg'), auto"
  lang_btn_ge_flag.style.transform = "scale(1)";
})

function changeLanguageTo(lang)
{
  currentLang = lang;
  
  if (lang == "gez")
  {
    and_life_begins_txt_en.innerHTML = "... და სიცოცხლე იწყება ...";
    and_life_begins_txt_en.id = "and_life_begins_txt_ge";

    olala_txt_1.innerHTML = "";
    olala_txt_2.innerHTML = "";
    olala_txt_3.innerHTML = "";
    olala_txt_4.innerHTML = "";

    let olalaTxts = document.getElementsByClassName("olala_txt");
    for (let i = 0; i < olalaTxts.length; i++)
    {
      olalaTxts[i].classList.remove = "olala_txt_en";
      olalaTxts[i].classList.add = "olala_txt_ge";
    }
    
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
  else if (lang == "enz")
  {
    and_life_begins_txt_ge.innerHTML = "... and life begins ..."
    and_life_begins_txt_ge.id = "and_life_begins_txt_en";

    olala_txt_1.innerHTML = "Parenthood is the greatest adventure you can ever go on. Here in O’lala Baby, we believe, that  every family deserves the best to bring colorful, creative expression to this journey.";
    olala_txt_2.innerHTML = "Our passion for providing only the finest and most trusted baby products for you and your little one, drives us to carefully curate our brands and offer you the highest standards of style, quality and safety.";
    olala_txt_3.innerHTML = "And we don't just stop at offering top-quality products in the universe.";
    olala_txt_4.innerHTML = "Our commitment to exceptional customer service proudly sets us apart.";

    let olalaTxts = document.getElementsByClassName("olala_txt");
    for (let i = 0; i < olalaTxts.length; i++)
    {
      olalaTxts[i].classList.remove = "olala_txt_en";
      olalaTxts[i].classList.add = "olala_txt_ge";
    }

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