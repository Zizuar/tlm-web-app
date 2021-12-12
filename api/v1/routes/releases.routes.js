const express = require('express');
const router = new express.Router();

const ReleaseCategories = {
  Song: 'songs',
  Collection: 'collections',
  Album: 'albums',
};

const releases = [
  {
    id: 'worry-bout-that',
    title: 'Worry Bout That (In The Morning)',
    category: ReleaseCategories.Song,
    releaseDate: new Date("2022-01-28"),
    presaveLink: '/presave/worry-bout-that',
    imageName: 'struck-single',
    text: {
      header: 'Worry Bout That (In The Morning)',
    },
    links: {
      spotify: '',
      amazon: '',
      apple: '',
    },
  },
  {
    id: 'struck',
    title: "Struck",
    category: ReleaseCategories.Song,
    releaseDate: new Date('2022-02-11'),
    presaveLink: "/presave/struck",
    imageName: 'struck-single',
    text: {
      header: 'Struck (single)',
    },
    links: {
      spotify: '',
      amazon: '',
      apple: '',
    },
  },
  {
    title: "Struck the EP",
    category: ReleaseCategories.Collection,
    releaseDate: new Date('2022-02-25'),
    presaveLink: '/presave/struck-ep',
    imageName: 'struck-ep',
    text: {
      header: 'Struck (the EP)',
    },
    links: {
      spotify: '',
      amazon: '',
      apple: '',
    },
    tracklist: [
      {
        title: 'Worry Bout That (In The Morning)'
      },
      {
        title: 'Struck'
      },
      {
        title: 'To Their Knees'
      }
    ]
  },
  {
    id: 'hit-me-like-a-dream',
    title: 'Hit Me Like A Dream',
    category: ReleaseCategories.Song,
    releaseDate: new Date('2021-01-01'),
    imageName: 'hitmelikeadream',
    text: {
      'header': 'Hit Me Like A Dream',
      'subheader': 'A revamped, fully produced re-release of the hit song Hit Me Like A Dream',
      'text': 'On streaming services now!',
    },
    links: {
      'spotify': 'https://open.spotify.com/track/6uPMD5TO3AusrsyFyfNnJZ',
      'amazon': 'https://music.amazon.com/albums/B0961KTCCQ',
      'apple': 'https://music.apple.com/us/album/hit-me-like-a-dream/1569700075',
    },
  },
  {
    id: 'lets-begin',
    title: 'Let\'s begin',
    category: ReleaseCategories.Song,
    releaseDate: new Date('2021-01-01'),
    imageName: 'lets_begin',
    text: {
      header: 'Let\'s Begin feat. Joliet4',
      subheader: 'Another collaboration with the extremely talented <a href="https://twitch.tv/joliet4" target="_blank">Joliet4</a>!',
      text: 'Available now on all major streaming platforms!',
    },
    links: {
      spotify: 'https://open.spotify.com/track/7GoJRM7kqh78IFBa5o6XWK?si=b1a8c0f5e6dd4e3c',
      amazon: 'https://music.amazon.com/albums/B09KJ4LGVB',
      apple: 'https://music.apple.com/us/album/lets-begin-single/1592343531',
    },
  },
  {
    id: 'through-the-valley',
    title: 'Through the Valley',
    category: ReleaseCategories.Song,
    releaseDate: new Date('2021-01-01'),
    imageName: 'through_the_valley',
    text: {
      header: 'Through the Valley',
      subheader: 'A Shawn James cover. Also known as Ellie\'s song from The Last of Us Part II.',
      text: 'Available now on all major streaming platforms!',
    },
    links: {
      spotify: 'https://open.spotify.com/track/5MJRJHX5Acjyj7IpvqJa3I',
      amazon: 'https://music.amazon.com/albums/B09DPHJ7LP',
      apple: 'https://music.apple.com/us/album/through-the-valley-single/1582961138',
    },
  },
  {
    title: '2021',
    category: ReleaseCategories.Collection,
    id: '2021',
    imageName: 'tl_2021',
    releaseDate: new Date('2021-01-01'),
    text: {
      header: 'Single releases in 2021',
    },
    linksArray: [
      {
        title: 'Exaggerate',
        spotify: 'https://open.spotify.com/track/2goKhHXBFl70temks9PqLi',
        amazon: 'https://music.amazon.com/albums/B092S5KCT',
        apple: 'https://music.apple.com/us/album/exaggerate-single/1563533680',
      },
      {
        title: 'Emergency',
        spotify: 'https://open.spotify.com/track/3CQ41l1HJdKRN8TKfaRYcj',
        amazon: 'https://music.amazon.com/albums/B092S5Y63X',
        apple: 'https://music.apple.com/us/album/emergency-single/1563533859',
      },
      {
        title: 'Throw Me Feelings',
        spotify: 'https://open.spotify.com/track/29337LP1L5Gslx6UjuuF6L',
        amazon: 'https://music.amazon.com/albums/B094ZFGTT2',
        apple: 'https://music.apple.com/us/album/throw-me-feelings-single/1567719335',
      },
      {
        title: 'Hit Me Like A Dream',
        spotify: 'https://open.spotify.com/track/6uPMD5TO3AusrsyFyfNnJZ',
        amazon: 'https://music.amazon.com/albums/B0961KTCCQ',
        apple: 'https://music.apple.com/us/album/hit-me-like-a-dream/1569700075',
      },
      {
        title: 'Parallel Universe',
        spotify: 'https://open.spotify.com/track/7ihJfLV3c0BRITh0Jfe965',
        amazon: 'https://music.amazon.com/albums/B09C47GX8F',
        apple: 'https://music.apple.com/us/album/parallel-universe/1580264605',
      },
    ],
  },
  {
    title: 'Songs for Being Alone',
    category: ReleaseCategories.Album,
    id: 'songs-for-being-alone',
    imageName: 'sfba',
    releaseDate: new Date('2021-01-01'),
    orderEnabled: true,
    text: {
      header: 'Songs for Being Alone',
      subheader: 'Full length album featuring 11 self-produced songs.',
      text: 'Available now on all major streaming platforms!',
    },
    links: {
      spotify: 'https://open.spotify.com/album/30qnxAB3tBNDhOZCzQHkl5',
      amazon: 'https://music.amazon.com/albums/B08T5PMFWZ',
      apple: 'https://music.apple.com/us/album/songs-for-being-alone/1548693543',
    },
    tracklist: [
      {
        title: 'Time It\'s Taken',
        youtubeLink: 'https://www.youtube.com/watch?v=8W1jnaJvEQA',
      },
      {
        title: 'What Does It Mean',
        youtubeLink: 'https://www.youtube.com/watch?v=atPgnPXLSkM',
      },
      {
        title: 'n(o)ne',
        youtubeLink: 'https://www.youtube.com/watch?v=7DyS-doIG8Q',
      },
      {
        title: 'Like I\'m Supposed To',
        youtubeLink: 'https://www.youtube.com/watch?v=I2opUXRjhPo',
      },
      {
        title: 'Lost Soul',
        youtubeLink: 'https://www.youtube.com/watch?v=jz8PApCmP-k',
      },
      {
        title: 'Get What You Get',
        youtubeLink: 'https://www.youtube.com/watch?v=CrFbKSgfqOE',
      },
      {
        title: 'My Life as an Emote = Giant Middle Finger',
        youtubeLink: 'https://www.youtube.com/watch?v=HXsWKArq4zM',
      },
      {
        title: 'Check Behind the Couch',
        youtubeLink: 'https://www.youtube.com/watch?v=suti0ylIhkI',
      },
      {
        title: 'Box',
        youtubeLink: 'https://www.youtube.com/watch?v=1Bsnk9pSOJM',
      },
      {
        title: 'All of the Will in the World',
        youtubeLink: 'https://www.youtube.com/watch?v=i_KXbNYg8HM',
      },
      {
        title: 'Last One (Take a Picture)',
        youtubeLink: 'https://www.youtube.com/watch?v=0DaeeDuULOY',
      },
    ],
  },
  {
    title: 'Caught Up (Let Me In) feat. Joliet4',
    category: ReleaseCategories.Song,
    id: 'caughtup',
    imageName: 'caughtup',
    releaseDate: new Date('2021-01-01'),
    text: {
      header: 'Caught Up (Let Me In) feat. Joliet4',
      subheader: 'In collaboration with my friend, the incredibly talented Twitch streamer <a href="https://twitch.tv/joliet4" target="_blank">Joliet4</a>',
      text: '<a href="https://www.youtube.com/watch?v=vsy0NwhPoBU" target="_blank">Lyric Video on Youtube</a>',
    },
    links: {
      spotify: 'https://open.spotify.com/album/3vmNRbZ7I3qzxizuy8fDdq',
      amazon: 'https://music.amazon.com/albums/B08HPKJFXR',
      apple: 'https://music.apple.com/us/album/caught-up-let-me-in-tlm-mix-single/1530814200',
    },
  }
];

/**
 * @swagger
 * tags:
 *  - name: Releases
 *    description: Songs, albums, collections or future releases
 */

/**
 * @swagger
 * /api/v1/releases:
 *  get:
 *    description: Get all Release
 *    tags: [Releases]
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/releases', (req, res) => {
  res.status(200).send(releases);
});

/**
 * @swagger
 * /api/v1/releases/{category}:
 *  get:
 *    description: Get Releases by category
 *    tags: [Releases]
 *    parameters:
 *      - name: category
 *        description: requested category
 *        in: path
 *        type: string
 *        required: false
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/releases/:category', (req, res) => {
  const result = releases.filter(release => release.category === req.params.category);
  res.status(200).send(result);
});

/**
 * @swagger
 * /api/v1/releases/{category}/{id}:
 *  get:
 *    description: Get Release by id
 *    tags: [Releases]
 *    parameters:
 *      - name: category
 *        description: category of requested release
 *        in: path
 *        type: string
 *        required: true
 *      - name: id
 *        description: release id
 *        in: path
 *        type: string
 *        required: true
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Success
 *      404:
 *        description: Release not found
 */
router.get('/releases/:category/:id', (req, res) => {
  const result = releases.find(release => release.id === req.params.id);
  if (result) {
    res.status(200).send(result);
  } else {
    res.status(404).send();
  }

});

module.exports = router;
