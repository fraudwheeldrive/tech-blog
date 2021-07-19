const { Post } = require('../models');

const postdata = [
  {
    title: 'GPUS are still impossible to get',
    content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Why my Dog Should go to Space!',
    content: 'https://nasa.gov/donec.json',
    user_id: 8
  },
  {
    title: 'Lando Norris can drive good.',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 1
  },
  {
    title: 'Why this Cat does more than Meow .',
    content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 4
  },
 
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
