const {
  db,
  amenity,
  camper,
  campground,
  campsite,
  reservation,
  user
} = require('./server/db/index')

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
    coverImage: '/SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '3',
    location: {type: 'Point', coordinates: [43.769856, -89.203265]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '4',
    location: {type: 'Point', coordinates: [43.76973, -89.2033]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '5',
    location: {type: 'Point', coordinates: [43.769728, -89.203308]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '6',
    location: {type: 'Point', coordinates: [43.769619, -89.203308]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '7',
    location: {type: 'Point', coordinates: [43.769531, -89.203407]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '8',
    location: {type: 'Point', coordinates: [43.769445, -89.203498]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '9',
    location: {type: 'Point', coordinates: [43.769462, -89.203212]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '8G',
    location: {type: 'Point', coordinates: [43.769075, -89.203757]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '87',
    location: {type: 'Point', coordinates: [43.769795, -89.204989]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '89',
    location: {type: 'Point', coordinates: [43.769795, -89.204989]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '90',
    location: {type: 'Point', coordinates: [43.770101, -89.205304]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '217',
    location: {type: 'Point', coordinates: [43.769036, -89.20541]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '218',
    location: {type: 'Point', coordinates: [43.769128, -89.205674]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '219',
    location: {type: 'Point', coordinates: [43.76919, -89.205815]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '222',
    location: {type: 'Point', coordinates: [43.769739, -89.205956]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '223',
    location: {type: 'Point', coordinates: [43.769891, -89.205968]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '224',
    location: {type: 'Point', coordinates: [43.769779, -89.205482]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '225',
    location: {type: 'Point', coordinates: [43.769694, -89.205648]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '230',
    location: {type: 'Point', coordinates: [43.769794, -89.206166]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '231',
    location: {type: 'Point', coordinates: [43.769644, -89.206182]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '232',
    location: {type: 'Point', coordinates: [43.769546, -89.206135]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '233',
    location: {type: 'Point', coordinates: [43.769546, -89.206135]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '234',
    location: {type: 'Point', coordinates: [43.769472, -89.206095]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '235',
    location: {type: 'Point', coordinates: [43.769265, -89.205956]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '236',
    location: {type: 'Point', coordinates: [43.769883, -89.206469]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '237',
    location: {type: 'Point', coordinates: [43.769746, -89.206477]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '238',
    location: {type: 'Point', coordinates: [43.76963, -89.206449]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '239',
    location: {type: 'Point', coordinates: [43.76945, -89.206353]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '240',
    location: {type: 'Point', coordinates: [43.769361, -89.206295]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '241',
    location: {type: 'Point', coordinates: [43.769171, -89.206187]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  },
  {
    name: '242',
    location: {type: 'Point', coordinates: [43.769097, -89.206025]},
    coverImage: 'SingleCamperStock.jpg',
    images: [],
    typeing: 'camper'
  }
]

const cabinSites = [
  {
    name: 'Otter',
    location: {type: 'Point', coordinates: [43.769974, -89.205607]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Eagle',
    location: {type: 'Point', coordinates: [43.770013, -89.205671]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Owl',
    location: {type: 'Point', coordinates: [43.769859, -89.205708]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Heron',
    location: {type: 'Point', coordinates: [43.769578, -89.205893]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Robin',
    location: {type: 'Point', coordinates: [43.769396, -89.205792]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Bear',
    location: {type: 'Point', coordinates: [43.769775, -89.205341]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Deer',
    location: {type: 'Point', coordinates: [43.769799, -89.205142]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Ceder',
    location: {type: 'Point', coordinates: [43.769562, -89.205167]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Birch',
    location: {type: 'Point', coordinates: [43.769513, -89.205255]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Oak',
    location: {type: 'Point', coordinates: [43.769424, -89.205361]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Fox',
    location: {type: 'Point', coordinates: [43.769343, -89.205463]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Badger',
    location: {type: 'Point', coordinates: [43.769446, -89.205519]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Cardinal',
    location: {type: 'Point', coordinates: [43.769283, -89.203287]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  },
  {
    name: 'Mangold',
    location: {type: 'Point', coordinates: [43.769244, -89.203428]},
    coverImage: '/BetterSingleCabin.jpg',
    images: [],
    typeing: 'cabin'
  }
]

const tentCampsites = [
  {
    name: '34',
    location: {type: 'Point', coordinates: [43.76863, -89.199685]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '35',
    location: {type: 'Point', coordinates: [43.768766, -89.199941]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '36',
    location: {type: 'Point', coordinates: [43.768884, -89.200007]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '37',
    location: {type: 'Point', coordinates: [43.768877, -89.200165]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '38',
    location: {type: 'Point', coordinates: [43.769282, -89.200445]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '39',
    location: {type: 'Point', coordinates: [43.769372, -89.200516]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '40',
    location: {type: 'Point', coordinates: [43.769508, -89.200645]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '41',
    location: {type: 'Point', coordinates: [43.76963, -89.200744]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '65',
    location: {type: 'Point', coordinates: [43.769894, -89.20483]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '66',
    location: {type: 'Point', coordinates: [43.769997, -89.204937]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '67',
    location: {type: 'Point', coordinates: [43.770149, -89.204963]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '68',
    location: {type: 'Point', coordinates: [43.770189, -89.204761]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '69',
    location: {type: 'Point', coordinates: [43.770156, -89.204589]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '70',
    location: {type: 'Point', coordinates: [43.769962, -89.204588]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '71',
    location: {type: 'Point', coordinates: [43.769914, -89.204571]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  },
  {
    name: '72',
    location: {type: 'Point', coordinates: [43.769852, -89.204709]},
    coverImage: '/BetterTent.jpg',
    images: [],
    typeing: 'tent'
  }
]
