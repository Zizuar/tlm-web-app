const express = require('express');
const router = new express.Router();

const pressReleases = [
  {
    songId: 'hit-me-like-a-dream',
    imgName: 'hitmelikeadream',
    dateStamp: {
      place: 'Nashua, NH',
      date: 'June 2021'
    },
    releaseAfter: new Date('2021-06-25'),
    links: {
      'spotify': 'https://open.spotify.com/track/6uPMD5TO3AusrsyFyfNnJZ',
      'amazon': 'https://music.amazon.com/albums/B0961KTCCQ',
      'apple': 'https://music.apple.com/us/album/hit-me-like-a-dream/1569700075',
    },
    text: {
      header: 'Hit Me Like A Dream',
      subheader: 'Full-time singer-songwriter Tyler Levs releases his latest southern rock song titled “Hit Me Like a Dream” which will be available as a single across all major music platforms. Tyler is originally from Maine and continues to write, record and collaborate on music out of New Hampshire. Tyler has teamed up with Nashville producer Roger Dean Miller Jr. to put together the track. The COVID Pandemic created tension during recording that led to a virtual production process.',
      paragraphs: [
        'Tyler Levs is a multi-instrumental singer/songwriter that has been serious about his craft since 2017, practicing up to 40 hours a week on live streams. His hobby turned career has maintained the same goal: to connect with others and to improve his craft.',
        '<em>“I have been waiting for the perfect production opportunity to bring this song to its fullest potential. I’m so glad Dean reached out to me about recording it because the final result is exactly as I originally imagined it years ago.”</em> - <small>TYLER LEVS</small>',
        'The track has been referred to as an “earworm” by various listeners on the <a href="https://twitch.tv/tylerlevsmusic" target="_blank">TylerLevsMusic Twitch Stream</a>; an online streaming service owned by Amazon.'
      ]
    }
  }
]

/**
 * @swagger
 * tags:
 *  - name: Press Releases
 */

/**
 * @swagger
 * /api/v1/press-releases:
 *  get:
 *    description: Get all Release
 *    tags: [Releases]
 *    produces: application/json
 *    responses:
 *      200:
 *        description: Success
 */
router.get('/press-releases', (req, res) => {
  res.status(200).send(pressReleases);
});

module.exports = router;
