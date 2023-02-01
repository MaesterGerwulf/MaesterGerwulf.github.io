let observer1 = new IntersectionObserver((entries) => {
  // const video1 = document.createElement('video');
  // const video2 = document.createElement('video');
  // video1.src = "Background - Night.mp4";
  // video2.src = "Google Map Cover.mp4";
  handleObserve(observer1, entries, 1, 2, 4);
}, { threshold: [0] });

let observer2 = new IntersectionObserver((entries) => 
  handleObserve(observer2, entries, 2, 2, 8), { threshold: [0] });

let observer3 = new IntersectionObserver((entries) => 
  handleObserve(observer3, entries, 2, 4, 6), { threshold: [0] });

let observer4 = new IntersectionObserver((entries) => 
  handleObserve(observer4, entries, 3, 2, 10), { threshold: [0] });

let observer5 = new IntersectionObserver((entries) => 
  handleObserve(observer5, entries, 3, 3, 4), { threshold: [0] });

let observer6 = new IntersectionObserver((entries) => 
  handleObserve(observer6, entries, 4, 1, 4), { threshold: [0] });

let observer7 = new IntersectionObserver((entries) => 
  handleObserve(observer7, entries, 4, 2, 6), { threshold: [0] });

function handleObserve(observer, entries, bridgeNum, imgNum, imgCount)
{
  if (entries[0].isIntersecting)
  {
    intoView(bridgeNum, imgNum, imgCount, 1)
    observer.unobserve(entries[0].target);
  }
}

function intoView(bridgeNum, imgNum, imgCount, num)
{
  document.getElementById("bridge_" + bridgeNum + "_img_" + imgNum + "_" + num)
    .style.transform = "scale(1)";
    
  if (num < imgCount)
  {
    setTimeout(() => {
      intoView(bridgeNum, imgNum, imgCount, num + 1);
  }, 600);
  }
}

observer1.observe(document.querySelector("#floor_1"));
observer2.observe(document.querySelector("#floor_2"));
observer3.observe(document.querySelector("#section_2"));
observer4.observe(document.querySelector("#bridge_3"));
observer5.observe(document.querySelector("#floor_3"));
observer6.observe(document.querySelector("#bridge_4"));
observer7.observe(document.querySelector("#floor_4"));
// observer8.observe(document.querySelector("#google_map_cover"));

document.addEventListener("DOMContentLoaded", function()
{
  if ("IntersectionObserver" in window)
  {
    var lazyVideoObserver1 = new IntersectionObserver(function(entries, observer)
    {
      if (entries[0].isIntersecting)
      {
        for (var source in video_background.children)
        {
          var videoSource = video_background.children[source];

          if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE")
            videoSource.src = videoSource.dataset.src;
        }

        video_background.load();
        lazyVideoObserver.unobserve(entries[0].target);
      }
    });

    lazyVideoObserver1.observe(document.getElementById("brand_div_2_3"));

    var lazyVideoObserver2 = new IntersectionObserver(function(entries, observer)
    {
      if (entries[0].isIntersecting)
      {
        for (var source in google_map_cover.children)
        {
          var videoSource = google_map_cover.children[source];

          if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE")
            videoSource.src = videoSource.dataset.src;
        }

        google_map_cover.load();
        setTimeout(() => {
          google_map_cover.style.display = "none";
          darken_map.style.display = "none";
        }, 4000);
        lazyVideoObserver.unobserve(entries[0].target);
      }
    });

    lazyVideoObserver2.observe(document.getElementById("google_map_cover"));
  }
});