<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
?>

[
  {
      "id": 1,
    "brand": "ford",
    "model": [
      {
        "id": 1.1,
        "name": "Mustang",
        "url": "https://www.ford.com/cars/mustang/",
        "image": "https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2019/collections/highlights/3-2/19mst_highlight_thefeel_219.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"
      },
      {
        "id": 1.2,
        "name": "f950",
        "url": "https://www.ford.com/commercial-trucks/f650-f750/",
        "image": "https://i.pinimg.com/originals/a8/4c/84/a84c84175bf1c7ed023720e4c390617e.jpg"
      },
      {
        "id": 1.3,
        "name": "gt",
        "url": "https://www.ford.com/performance/gt/",
        "image": "https://cdn.motor1.com/images/mgl/o8V7q/s1/2019-ford-gt-carbon-series.jpg"
      }
    ]
  },
  {
    "id": 2,
    "brand": "bmw",
    "model": [
      {
        "id": 2.1,
        "name": "8",
        "url": "https://www.bmw.com/en/bmw-models/bmw-8-series-gran-coupe.html",
        "image": "https://www.bmw.com.tr/content/dam/bmw/common/all-models/8-series/coupe/2018/at-a-glance/bmw-8series-coupe-sp-xxl.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1527669998791.jpg"
      },
      {
        "id": 2.2,
        "name": "vision",
        "url": "https://www.bmw.com/en/innovation/bmw-vision-m-next.html",
        "image": "https://images.netdirector.co.uk/gforces-auto/image/upload/w_412,h_309,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/295730c6112ec306b0369316ee3843c5/the_bmw_vision_next_100_2.jpeg"
      }
    ]
  },
  {
    "id": 3,
    "brand": "mercedes",
    "model": [
      {
        "id": 3.1,
        "name": "cla",
        "url": "https://www.mercedes-benz.com/en/mercedes-benz/vehicles/passenger-cars/cla/",
        "image": "https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/cla/cla-coupe/explore/concept-intro/_jcr_content/contentgallerycontainer/par/contentgallery_c8fa/par/contentgallerytile_e/image.MQ6.8.20180122133037.jpeg"
      },
      {
        "id": 3.2,
        "name": "slc",
        "url": "https://www.mercedes-benz.com.tr/passengercars/mercedes-benz-cars/models/slc/slc-roadster/explore.html",
        "image": "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my19/slc/byo/options/2019-SLC-ROADSTER-013.jpg"
      }
    ]
  },
  {
    "id": 4,
    "brand": "audi",
    "model": [
      {
        "id": 4.1,
        "name": "a4",
        "url": "https://www.audi.com/en/experience-audi/models-and-technology/serial-models/a4.html",
        "image": "https://www.audi.com.tr/dam/nemo/models/a4/a4-limousine/my-2019/1920x1080_MTC_XL/1920x1080_MTC_framed_AA4_L_181015.jpg"
      },
      {
        "id": 4.2,
        "name": "aime",
        "url": "https://www.audi.com/en/experience-audi/models-and-technology/concept-cars/audi-aime.html",
        "image": "https://www.audi.com/content/dam/gbp2/experience-audi/models-and-technology/concept-cars/2019/aime/1920x600-desktop-concept-cars-audi-aime-2019-teaser.jpg?"
      }
    ]
  }
]