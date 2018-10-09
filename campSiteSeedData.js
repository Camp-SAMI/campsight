// campsite model:
// const campsite = db.define('campsite', {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   location: {
//     type: Sequelize.GEOMETRY('POINT'),
//     allowNull: false
//   },
//   coverImage: {
//     type: Sequelize.STRING
//   },
//   images: {
//     type: Sequelize.ARRAY(Sequelize.STRING)
//   },
//   typing: {
//     type: Sequelize.ENUM('tent', 'trailer', 'cabin')
//   }
// })

const camperSites = [
  {
    name: '1',
    location: {type: 'Point', coordinates: [43.770223, -89.203063]},
    coverImage: '/images/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '3',
    location: {type: 'Point', coordinates: [43.769856, -89.203265]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '4',
    location: {type: 'Point', coordinates: [43.76973, -89.2033]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '5',
    location: {type: 'Point', coordinates: [43.769728, -89.203308]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '6',
    location: {type: 'Point', coordinates: [43.769619, -89.203308]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '7',
    location: {type: 'Point', coordinates: [43.769531, -89.203407]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '8',
    location: {type: 'Point', coordinates: [43.769445, -89.203498]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '9',
    location: {type: 'Point', coordinates: [43.769462, -89.203212]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '8G',
    location: {type: 'Point', coordinates: [43.769075, -89.203757]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '87',
    location: {type: 'Point', coordinates: [43.769795, -89.204989]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '89',
    location: {type: 'Point', coordinates: [43.769795, -89.204989]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '90',
    location: {type: 'Point', coordinates: [43.770101, -89.205304]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '217',
    location: {type: 'Point', coordinates: [43.769036, -89.20541]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '218',
    location: {type: 'Point', coordinates: [43.769128, -89.205674]},
    coverImage: '/BetterTent.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '219',
    location: {type: 'Point', coordinates: [43.76919, -89.205815]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '222',
    location: {type: 'Point', coordinates: [43.769739, -89.205956]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '223',
    location: {type: 'Point', coordinates: [43.769891, -89.205968]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '224',
    location: {type: 'Point', coordinates: [43.769779, -89.205482]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '225',
    location: {type: 'Point', coordinates: [43.769694, -89.205648]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '230',
    location: {type: 'Point', coordinates: [43.769794, -89.206166]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '231',
    location: {type: 'Point', coordinates: [43.769644, -89.206182]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '232',
    location: {type: 'Point', coordinates: [43.769546, -89.206135]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '233',
    location: {type: 'Point', coordinates: [43.769546, -89.206135]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '234',
    location: {type: 'Point', coordinates: [43.769472, -89.206095]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '235',
    location: {type: 'Point', coordinates: [43.769265, -89.205956]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '236',
    location: {type: 'Point', coordinates: [43.769883, -89.206469]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '237',
    location: {type: 'Point', coordinates: [43.769746, -89.206477]},
    coverImage: '/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '238',
    location: {type: 'Point', coordinates: [43.76963, -89.206449]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '239',
    location: {type: 'Point', coordinates: [43.76945, -89.206353]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '240',
    location: {type: 'Point', coordinates: [43.769361, -89.206295]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '241',
    location: {type: 'Point', coordinates: [43.769171, -89.206187]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '242',
    location: {type: 'Point', coordinates: [43.769097, -89.206025]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '1G',
    location: {type: 'Point', coordinates: [43.770392, -89.202682]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '2G',
    location: {type: 'Point', coordinates: [43.770523, -89.203396]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '3G',
    location: {type: 'Point', coordinates: [43.770382, -89.204436]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '4G',
    location: {type: 'Point', coordinates: [43.77033, -89.205194]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '6G',
    location: {type: 'Point', coordinates: [43.770127, -89.205888]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '7G',
    location: {type: 'Point', coordinates: [43.768787, -89.204974]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '11',
    location: {type: 'Point', coordinates: [43.769168, -89.199612]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '12',
    location: {type: 'Point', coordinates: [43.769318, -89.199652]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '13',
    location: {type: 'Point', coordinates: [43.769467, -89.199746]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '14',
    location: {type: 'Point', coordinates: [43.769504, -89.199779]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '51',
    location: {type: 'Point', coordinates: [43.77054, -89.202955]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '52',
    location: {type: 'Point', coordinates: [43.770511, -89.203173]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '56',
    location: {type: 'Point', coordinates: [43.770398, -89.204305]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '63',
    location: {type: 'Point', coordinates: [43.77034, -89.204714]},
    coverImage:
      'https://c1.staticflickr.com/5/4360/37100418336_deaba61820_b.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '64',
    location: {type: 'Point', coordinates: [43.77034, -89.204714]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '88',
    location: {type: 'Point', coordinates: [43.76995, -89.205151]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '97',
    location: {type: 'Point', coordinates: [43.768917, -89.204109]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '98',
    location: {type: 'Point', coordinates: [43.768854, -89.204414]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '99',
    location: {type: 'Point', coordinates: [43.768816, -89.204631]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '100',
    location: {type: 'Point', coordinates: [43.768792, -89.204824]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '113',
    location: {type: 'Point', coordinates: [43.768792, -89.204824]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '114',
    location: {type: 'Point', coordinates: [43.768833, -89.205175]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '212',
    location: {type: 'Point', coordinates: [43.77052, -89.203236]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '213',
    location: {type: 'Point', coordinates: [43.770506, -89.203658]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '214',
    location: {type: 'Point', coordinates: [43.770487, -89.203903]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '214',
    location: {type: 'Point', coordinates: [43.770468, -89.204039]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '214',
    location: {type: 'Point', coordinates: [43.770424, -89.204181]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '216',
    location: {type: 'Point', coordinates: [43.770424, -89.204181]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '228',
    location: {type: 'Point', coordinates: [43.77018, -89.205758]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '229',
    location: {type: 'Point', coordinates: [43.77025, -89.205528]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '25',
    location: {type: 'Point', coordinates: [43.769849, -89.200648]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '26',
    location: {type: 'Point', coordinates: [43.769901, -89.20052]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '27',
    location: {type: 'Point', coordinates: [43.769948, -89.200218]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '28',
    location: {type: 'Point', coordinates: [43.769891, -89.200048]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '29',
    location: {type: 'Point', coordinates: [43.769747, -89.199929]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '30',
    location: {type: 'Point', coordinates: [43.76958, -89.199856]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '42',
    location: {type: 'Point', coordinates: [43.769803, -89.201203]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '43',
    location: {type: 'Point', coordinates: [43.76985, -89.20136]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '44',
    location: {type: 'Point', coordinates: [43.76986, -89.201532]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '45',
    location: {type: 'Point', coordinates: [43.769749, -89.201571]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '46',
    location: {type: 'Point', coordinates: [43.769612, -89.201592]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '47',
    location: {type: 'Point', coordinates: [43.769495, -89.201612]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '48',
    location: {type: 'Point', coordinates: [43.769365, -89.201681]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '49',
    location: {type: 'Point', coordinates: [43.769243, -89.201798]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '53',
    location: {type: 'Point', coordinates: [43.770297, -89.203333]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '54',
    location: {type: 'Point', coordinates: [43.770219, -89.203483]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '55',
    location: {type: 'Point', coordinates: [43.770178, -89.203647]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '57',
    location: {type: 'Point', coordinates: [43.770161, -89.203812]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '58',
    location: {type: 'Point', coordinates: [43.770135, -89.204023]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '59',
    location: {type: 'Point', coordinates: [43.770094, -89.20426]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '60',
    location: {type: 'Point', coordinates: [43.770325, -89.203625]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '61',
    location: {type: 'Point', coordinates: [43.770296, -89.203773]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '62',
    location: {type: 'Point', coordinates: [43.770249, -89.204093]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '73',
    location: {type: 'Point', coordinates: [43.769667, -89.20467]},
    coverImage:
      'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2017/03/woolrich-campers-woods.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '74',
    location: {type: 'Point', coordinates: [43.769733, -89.204486]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '75',
    location: {type: 'Point', coordinates: [43.76978, -89.2043]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '76',
    location: {type: 'Point', coordinates: [43.769876, -89.204126]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '77',
    location: {type: 'Point', coordinates: [43.769911, -89.203989]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '78',
    location: {type: 'Point', coordinates: [43.769936, -89.203773]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '79',
    location: {type: 'Point', coordinates: [43.769998, -89.203639]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '80',
    location: {type: 'Point', coordinates: [43.76958, -89.204652]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '81',
    location: {type: 'Point', coordinates: [43.769643, -89.204462]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '82',
    location: {type: 'Point', coordinates: [43.769702, -89.204262]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '84',
    location: {type: 'Point', coordinates: [43.769775, -89.204038]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '85',
    location: {type: 'Point', coordinates: [43.769835, -89.203813]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },

  {
    name: '86',
    location: {type: 'Point', coordinates: [43.769835, -89.203624]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '92',
    location: {type: 'Point', coordinates: [43.769291, -89.204602]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '93',
    location: {type: 'Point', coordinates: [43.769373, -89.204652]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '101',
    location: {type: 'Point', coordinates: [43.769189, -89.203889]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '102',
    location: {type: 'Point', coordinates: [43.76917, -89.204061]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '103',
    location: {type: 'Point', coordinates: [43.769113, -89.204258]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '104',
    location: {type: 'Point', coordinates: [43.769085, -89.204386]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '106',
    location: {type: 'Point', coordinates: [43.768963, -89.204678]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '107',
    location: {type: 'Point', coordinates: [43.769053, -89.204954]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '109',
    location: {type: 'Point', coordinates: [43.769194, -89.205157]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '110',
    location: {type: 'Point', coordinates: [43.769314, -89.205009]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '111',
    location: {type: 'Point', coordinates: [43.76922, -89.20494]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '112',
    location: {type: 'Point', coordinates: [43.769035, -89.204642]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '115',
    location: {type: 'Point', coordinates: [43.769677, -89.20361]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '116',
    location: {type: 'Point', coordinates: [43.769613, -89.203774]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '117',
    location: {type: 'Point', coordinates: [43.7696, -89.203873]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '118',
    location: {type: 'Point', coordinates: [43.769503, -89.204273]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '119',
    location: {type: 'Point', coordinates: [43.769435, -89.204441]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '120',
    location: {type: 'Point', coordinates: [43.769464, -89.203908]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '121',
    location: {type: 'Point', coordinates: [43.769405, -89.204155]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '122',
    location: {type: 'Point', coordinates: [43.769368, -89.20438]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '123',
    location: {type: 'Point', coordinates: [43.768439, -89.202691]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '124',
    location: {type: 'Point', coordinates: [43.768595, -89.203138]},
    coverImage:
      'https://camperrevamper.files.wordpress.com/2010/10/red_shasta.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '125',
    location: {type: 'Point', coordinates: [43.768808, -89.203193]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '126',
    location: {type: 'Point', coordinates: [43.768974, -89.203195]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '127',
    location: {type: 'Point', coordinates: [43.769085, -89.203111]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '128',
    location: {type: 'Point', coordinates: [43.769288, -89.203027]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '129',
    location: {type: 'Point', coordinates: [43.769213, -89.202789]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '130',
    location: {type: 'Point', coordinates: [43.76904, -89.202788]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '131',
    location: {type: 'Point', coordinates: [43.768893, -89.202812]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '132',
    location: {type: 'Point', coordinates: [43.768728, -89.202826]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '133',
    location: {type: 'Point', coordinates: [43.768621, -89.202831]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '134',
    location: {type: 'Point', coordinates: [43.768598, -89.202721]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '135',
    location: {type: 'Point', coordinates: [43.768736, -89.202703]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '136',
    location: {type: 'Point', coordinates: [43.768862, -89.202685]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '137',
    location: {type: 'Point', coordinates: [43.769043, -89.202666]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '138',
    location: {type: 'Point', coordinates: [43.76918, -89.202669]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '145',
    location: {type: 'Point', coordinates: [43.768615, -89.202245]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '146',
    location: {type: 'Point', coordinates: [43.768741, -89.202177]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '147',
    location: {type: 'Point', coordinates: [43.768904, -89.202172]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '148',
    location: {type: 'Point', coordinates: [43.769045, -89.202126]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '149',
    location: {type: 'Point', coordinates: [43.769167, -89.202083]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '150',
    location: {type: 'Point', coordinates: [43.770307, -89.201408]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '151',
    location: {type: 'Point', coordinates: [43.770147, -89.201383]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '152',
    location: {type: 'Point', coordinates: [43.77004, -89.201261]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '153',
    location: {type: 'Point', coordinates: [43.770181, -89.201125]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '154',
    location: {type: 'Point', coordinates: [43.770281, -89.200996]},
    coverImage: 'https://www.kennedypark.co.nz/assets/Uploads/powered-site.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '156',
    location: {type: 'Point', coordinates: [43.770577, -89.201003]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '157',
    location: {type: 'Point', coordinates: [43.770531, -89.200806]},
    coverImage: '/images/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '158',
    location: {type: 'Point', coordinates: [43.770535, -89.200624]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '159',
    location: {type: 'Point', coordinates: [43.770542, -89.200412]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '160',
    location: {type: 'Point', coordinates: [43.770453, -89.200278]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '161',
    location: {type: 'Point', coordinates: [43.77038, -89.20024]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '163',
    location: {type: 'Point', coordinates: [43.770239, -89.200531]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '164',
    location: {type: 'Point', coordinates: [43.770068, -89.200624]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '165',
    location: {type: 'Point', coordinates: [43.770012, -89.200772]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '166',
    location: {type: 'Point', coordinates: [43.76996, -89.200944]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '167',
    location: {type: 'Point', coordinates: [43.770153, -89.200801]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '168',
    location: {type: 'Point', coordinates: [43.770268, -89.200725]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '169',
    location: {type: 'Point', coordinates: [43.770359, -89.200575]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '170',
    location: {type: 'Point', coordinates: [43.76961, -89.201134]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '171',
    location: {type: 'Point', coordinates: [43.769462, -89.200872]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '172',
    location: {type: 'Point', coordinates: [43.769478, -89.201207]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '173',
    location: {type: 'Point', coordinates: [43.76933, -89.200962]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '174',
    location: {type: 'Point', coordinates: [43.769362, -89.201243]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '175',
    location: {type: 'Point', coordinates: [43.769177, -89.201019]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '176',
    location: {type: 'Point', coordinates: [43.769224, -89.201324]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '177',
    location: {type: 'Point', coordinates: [43.769116, -89.200855]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '178',
    location: {type: 'Point', coordinates: [43.769005, -89.201312]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '179',
    location: {type: 'Point', coordinates: [43.769102, -89.200684]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '180',
    location: {type: 'Point', coordinates: [43.76899, -89.201178]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '181',
    location: {type: 'Point', coordinates: [43.76907, -89.200479]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '182',
    location: {type: 'Point', coordinates: [43.768934, -89.20099]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '183',
    location: {type: 'Point', coordinates: [43.769048, -89.200338]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '184',
    location: {type: 'Point', coordinates: [43.768908, -89.200803]},
    coverImage: '/images/SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '186',
    location: {type: 'Point', coordinates: [43.768902, -89.200591]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '188',
    location: {type: 'Point', coordinates: [43.768891, -89.200398]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '189',
    location: {type: 'Point', coordinates: [43.769025, -89.201811]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '190',
    location: {type: 'Point', coordinates: [43.768903, -89.201944]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '191',
    location: {type: 'Point', coordinates: [43.768758, -89.201881]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '192',
    location: {type: 'Point', coordinates: [43.768799, -89.201742]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '139',
    location: {type: 'Point', coordinates: [43.769245, -89.20236]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '140',
    location: {type: 'Point', coordinates: [43.769123, -89.202378]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '141',
    location: {type: 'Point', coordinates: [43.769015, -89.202405]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '142',
    location: {type: 'Point', coordinates: [43.768893, -89.202434]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '143',
    location: {type: 'Point', coordinates: [43.768773, -89.202457]},
    coverImage:
      'http://www.southsidervoice.com/uploads/1/8/6/1/18619172/ssv-campers-cummings-2_orig.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  },
  {
    name: '144',
    location: {type: 'Point', coordinates: [43.768665, -89.202462]},
    coverImage: 'SingleCamperStock.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'trailer'
  }
]

/*


    CabinSites



*/
const cabinSites = [
  {
    name: 'Otter',
    location: {type: 'Point', coordinates: [43.769974, -89.205607]},
    coverImage:
      'https://ididaride.com/wp-content/uploads/2017/06/adobe-cpl-cabins-1-e1497671704746.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Eagle',
    location: {type: 'Point', coordinates: [43.770013, -89.205671]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Owl',
    location: {type: 'Point', coordinates: [43.769859, -89.205708]},
    coverImage:
      'http://www.lazylanecabins.com/images/campingcabins/Camping_Cabins1.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Heron',
    location: {type: 'Point', coordinates: [43.769578, -89.205893]},
    coverImage: 'http://grapevinelogcabins.com/images/home.collage3.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Robin',
    location: {type: 'Point', coordinates: [43.769396, -89.205792]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Bear',
    location: {type: 'Point', coordinates: [43.769775, -89.205341]},
    coverImage:
      'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fwww.sunset.com%2Fwp-content%2Fuploads%2Fe432198a38f38ffaf05aa80378d6131b-800x0-c-default.jpg&w=700&q=85',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Deer',
    location: {type: 'Point', coordinates: [43.769799, -89.205142]},
    coverImage:
      'http://www.bnblist.com/ohio-bed-and-breakfast-directory/cabin-at-glenking-bed-and-breakfast-minerva-ohio/cabin_spring.JPG',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Ceder',
    location: {type: 'Point', coordinates: [43.769562, -89.205167]},
    coverImage:
      'https://mostateparks.com/sites/mostateparks/files/Twain%20SP%20cabin%20exterior.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Birch',
    location: {type: 'Point', coordinates: [43.769513, -89.205255]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Oak',
    location: {type: 'Point', coordinates: [43.769424, -89.205361]},
    coverImage:
      'https://cdn.narcity.com/u/2018/04/19/8b0b06682d46e1da05dcee639998bc45ac916847.jpg_1200x630.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Fox',
    location: {type: 'Point', coordinates: [43.769343, -89.205463]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Badger',
    location: {type: 'Point', coordinates: [43.769446, -89.205519]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Cardinal',
    location: {type: 'Point', coordinates: [43.769283, -89.203287]},
    coverImage:
      'https://media-cdn.tripadvisor.com/media/photo-s/06/90/27/f0/forest-hill-motel-cottages.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  },
  {
    name: 'Mangold',
    location: {type: 'Point', coordinates: [43.769244, -89.203428]},
    coverImage:
      'http://www.gocampingamerica.com/sites/gocampingamerica.com/files/images/camping_cabin.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'cabin'
  }
]
/*



    Tent Sites



*/

//   ['https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
//   'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
//   'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
//   'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
//   'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
//   'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
//   'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
//   'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
//   'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
//   'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
// ]

const tentSites = [
  {
    name: '34',
    location: {type: 'Point', coordinates: [43.76863, -89.199685]},
    coverImage:
      'http://50campfires.com/wp-content/uploads/2014/04/tent2-620x330.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '35',
    location: {type: 'Point', coordinates: [43.768766, -89.199941]},
    coverImage:
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/3d/60/df/camping-grounds.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '36',
    location: {type: 'Point', coordinates: [43.768884, -89.200007]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typing: 'tent'
  },
  {
    name: '37',
    location: {type: 'Point', coordinates: [43.768877, -89.200165]},
    coverImage:
      'https://idsb.tmgrup.com.tr/2015/07/10/HaberDetay/1436552118171.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '38',
    location: {type: 'Point', coordinates: [43.769282, -89.200445]},
    coverImage:
      'https://www.volcanohuts.com/images/accommodation/21835_295299363154_294919853154_3480307_3300667_n-1.jpe',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '39',
    location: {type: 'Point', coordinates: [43.769372, -89.200516]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typing: 'tent'
  },
  {
    name: '40',
    location: {type: 'Point', coordinates: [43.769508, -89.200645]},
    coverImage:
      'https://cdn.muenchen-p.de/.imaging/stk/responsive/image980/dms/lhm/tourismus/camping-l/document/camping-l.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '41',
    location: {type: 'Point', coordinates: [43.76963, -89.200744]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typing: 'tent'
  },
  {
    name: '65',
    location: {type: 'Point', coordinates: [43.769894, -89.20483]},
    coverImage:
      'https://sabtusore.com/wp-content/uploads/2017/10/camping-tourist.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '66',
    location: {type: 'Point', coordinates: [43.769997, -89.204937]},
    coverImage: 'http://unl-sd.org/img/new-forest-dating-services.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '67',
    location: {type: 'Point', coordinates: [43.770149, -89.204963]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typing: 'tent'
  },
  {
    name: '68',
    location: {type: 'Point', coordinates: [43.770189, -89.204761]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typing: 'tent'
  },
  {
    name: '69',
    location: {type: 'Point', coordinates: [43.770156, -89.204589]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typing: 'tent'
  },
  {
    name: '70',
    location: {type: 'Point', coordinates: [43.769962, -89.204588]},
    coverImage:
      'https://media-cdn.tripadvisor.com/media/photo-s/0d/71/ff/2c/oloiden-camping-grounds.jpg',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '71',
    location: {type: 'Point', coordinates: [43.769914, -89.204571]},
    coverImage:
      'https://images.dnr.state.mn.us/destinations/state_forests/state-forest_garrison-lake-banner.jpg ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  },
  {
    name: '72',
    location: {type: 'Point', coordinates: [43.769852, -89.204709]},
    coverImage:
      'http://s3.amazonaws.com/ncc-ccn/images/_cardWide/camping-card.jpg?mtime=20170425165109 ',
    images: [
      'https://vtstateparks.com/assets/images/branbury-tent-site.jpg',
      'https://www.nps.gov/maca/planyourvisit/images/MapleSpringsCampground-Campsite.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      'https://www.visitstaugustine.com/sites/default/files/styles/large/public/taxonomy/faver_dykes_st_augustine_florida.jpg',
      'https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5302302.jpg',
      'https://www.outsideonline.com/sites/default/files/styles/img_948x622/public/2017/05/05/best-car-camping-tents-dusk-campsite_h.jpg?itok=Fd-Vh4hw',
      'https://mnresortsandcampgrounds.com/wp-content/uploads/2017/08/lake12-400x282.jpg',
      'https://media-cdn.tripadvisor.com/media/photo-s/06/72/ff/26/koa-kampgrounds.jpg',
      'https://wisconsinstateparks.reserveamerica.com/webphotos/WI/pid60026/0/540x360.jpg ',
      'https://www.co.sauk.wi.us/sites/default/files/styles/gallery500/public/imageattachments/environmental-health/page/1874/camp-1163419_1280.jpg?itok=TW_uOZmR',
      'https://cdnstep-americantownscom.netdna-ssl.com/img/article/wi-backpack-camping-1.jpg'
    ],
    typing: 'tent'
  }
]

module.exports = {camperSites, cabinSites, tentSites}
