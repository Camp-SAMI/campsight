const ticketData = [
  {
    title: 'Toilet Broken',
    email: 'cody1@email.com',
    content:
      "The toilet close to Heron appears to have broken down; it won't flush at all.",
    priority: 'null',
    status: 'open',
    image:
      'https://cf.ltkcdn.net/camping/images/std/130453-267x400-toilet-portable-camping.jpg',
    location: {type: 'point', coordinates: [43.770334, -89.203425]}
  },
  {
    title: 'Tree by 154 fell down',
    email: 'isisheen89@gmail.com',
    content:
      "One of the trees close to our campsite has fallen over after a thunderstorm. It's taking up a lot of space, so it would be great if you could clear it out.",
    priority: 'null',
    status: 'open',
    image:
      'http://static-33.sinclairstoryline.com/resources/media/e43e75bd-be41-4628-95f5-7725a8e64925-large16x9_Fallentree.JPG?1492789450762',
    location: {type: 'point', coordinates: [43.77006, -89.201521]}
  },
  {
    title: 'Bed in Badger Cabin is broken',
    email: 'bagginsy7ik@yahoo.com',
    content:
      'The bed by the eastern wall in Badger Cabin collapsed in the middle, so the matress is sagging down to the floor.',
    priority: '4',
    status: 'in-progress',
    image:
      'https://media-cdn.tripadvisor.com/media/photo-s/06/47/b0/4b/highwaymans-bed-breakfast.jpg',
    location: {type: 'point', coordinates: [43.769626, -89.205351]}
  },
  {
    title: 'Too many racoons nearby',
    email: 'ulyssesshot@hotmail.com',
    content:
      'At night, we keep getting racoons coming near our tent, even though we dispose of our garbage properly. They make a lot of noise, which makes it hard to sleep.',
    priority: 'null',
    status: 'open',
    image:
      'http://3.bp.blogspot.com/-3gpAoEKr_EY/TfjZ36KychI/AAAAAAAAAKE/fhOJE2ZHAPk/s1600/raccoon%252Bmob.jpg',
    location: {type: 'point', coordinates: [43.768963, -89.204257]}
  },
  {
    title: 'Neighbor is too noisy',
    email: 'gazelle980@hotmail.com',
    content:
      'The person staying in the tent next to my campsite makes way too much noise at night; he constantly shouts profanity at ungodly hours. I already tried talking to him myself and nothing changed, so it would be nice if someone else could get him to stop.',
    priority: '2',
    status: 'close'
  },
  {
    title: 'Not sure where to get firewood',
    email: 'kferguson@zippo.net',
    content:
      'Could someone direct me on where I can find firewood prechopped? Thank you.',
    priority: '1',
    status: 'close'
  }
]

module.exports = ticketData
