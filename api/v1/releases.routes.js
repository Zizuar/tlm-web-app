const express = require('express');
const router = new express.Router();

const ReleaseCategories = {
  Song: 'songs',
  Collection: 'collections',
  Album: 'albums'
}

const releases = [
  {
    id: 'hit-me-like-a-dream',
    title: 'Hit Me Like A Dream',
    category: ReleaseCategories.Song,
    releaseDate: new Date('2021-01-01'),
    imageName: 'hitmelikeadream',
    text: {
      "header": "Hit Me Like A Dream",
      "subheader": "A revamped, fully produced re-release of the hit song Hit Me Like A Dream",
      "text": "On streaming services now!"
    },
    links: {
      "spotify": "https://open.spotify.com/track/6uPMD5TO3AusrsyFyfNnJZ",
      "amazon": "https://music.amazon.com/albums/B0961KTCCQ",
      "apple": "https://music.apple.com/us/album/hit-me-like-a-dream/1569700075"
    }
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
      text: 'Available now on all major streaming platforms!'
    },
    links: {
      spotify: 'https://open.spotify.com/track/7GoJRM7kqh78IFBa5o6XWK?si=b1a8c0f5e6dd4e3c',
      amazon: 'https://music.amazon.com/albums/B09KJ4LGVB',
      apple: 'https://music.apple.com/us/album/lets-begin-single/1592343531'
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
      text: 'Available now on all major streaming platforms!'
    },
    links: {
      spotify: 'https://open.spotify.com/track/5MJRJHX5Acjyj7IpvqJa3I',
      amazon: 'https://music.amazon.com/albums/B09DPHJ7LP',
      apple: 'https://music.apple.com/us/album/through-the-valley-single/1582961138'
    }
  },
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
  console.log(releases);
  res.status(200).send(releases);
});

module.exports = router;
