handleMidRange();

window.addEventListener("resize", () => handleMidRange())

function handleMidRange()
{
  const vw = window.innerWidth;
  const ratio = vw / 1350;
  const showcaseDivs = document.getElementsByClassName("showcase_div");
  
  if (vw > 1920)
  {
    // video_background.style.height = (1080 * 1920 / vw) + "px";
    // console.log((1080 * 1920 / vw));
  }
  
  if (vw >= 768 && vw < 1350)
  {
    section_1.style.zoom = ratio;
    section_2.style.zoom = ratio;
    section_3.style.zoom = ratio;

    for (let i = 0; i < showcaseDivs.length; i++)
      showcaseDivs[i].style.zoom = ratio;
  }
  else
  {
    section_1.style.zoom = 1;
    section_2.style.zoom = 1;
    section_3.style.zoom = 1;

    for (let i = 0; i < showcaseDivs.length; i++)
      showcaseDivs[i].style.zoom = 1;
  }
  if (vw < 1350)
  {
    bridge_1.style.zoom = ratio;
    bridge_2.style.zoom = ratio;
    bridge_3.style.zoom = ratio;
    bridge_4.style.zoom = ratio;
    floor_3.style.zoom = ratio;
    street.style.zoom = ratio;
  }
  else
  {
    bridge_1.style.zoom = 1;
    bridge_2.style.zoom = 1;
    bridge_3.style.zoom = 1;
    bridge_4.style.zoom = 1;
    floor_3.style.zoom = 1;
    street.style.zoom = 1;
  }
}