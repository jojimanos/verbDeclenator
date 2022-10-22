const express = require('express');
const { determineVoice } = require('../helpers/determine_voice');
const { formThePresent } = require('../helpers/formThePresent');
const { Stem_mod } = require('../helpers/stem_mod');
const router = express.Router();

router.post('/voice', determineVoice);
router.post('/form-the-present', formThePresent, Stem_mod)
router.post('/stem-mod', Stem_mod)

module.exports = router;