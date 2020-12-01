import { v4 as uuidv4 } from 'uuid';

function tracks() {
  return [
    {
      name: 'Second Nature MiniMix',
      cover:
        'https://s3-eu-west-1.amazonaws.com/hos-static-shop/image/5081/large',
      artist: 'Netsky',
      // audio:
      //   'https://soundcloud.com/hospitalrecords/netsky-second-nature-album-minimix',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9149',
      color: ['#432371', '#A1ABDC','black'],
      id: uuidv4(),
      active: true,
    },
    {
      name: 'Afronaut',
      cover:
        'https://images.genius.com/eef91e07ee4e94d4fab5c130b4d2b987.1000x1000x1.jpg',
      artist: 'Netsky & Rudimental',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=9913',
      color: ['#5B756A', '#5DAD3B', 'lightgreen'],
      id: uuidv4(),
      active: false,
    },
    {
      name: 'Seven Summers',
      cover:
        'https://www.hospitalrecords.com/wp-content/uploads/2020/11/PODCAST-WHINEY-TAKEOVER-SQUARE-1000x1000.png',
      artist: 'Keeno',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8518',
      color: ['#2B404A', '#B9E0B5','whitesmoke'],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Don't wake me up",
      cover: 'https://i1.sndcdn.com/artworks-000645996715-6bx6ye-t500x500.jpg',
      artist: 'Bop & Subwave',
      audio: 'https://mp3.chillhop.com/serve.php/?mp3=8953',
      color: ['#0D1234', '#363EB5', 'lightyellow'],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default tracks;
