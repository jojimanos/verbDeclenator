const express = require('express');
const { determineVoice } = require('../helpers/determine_voice');
const { formTheImperfect } = require('../helpers/imperfect/formTheImperfect');
const { formThePresent } = require('../helpers/present/formThePresent');
const { formThePresentOptative } = require('../helpers/present/formThePresentOptative');
const { formThePresentSubjunctive } = require('../helpers/present/formThePresentSubjunctive')
const { Stem_mod } = require('../helpers/stem_mod');
const {aoristStemMod} = require('../helpers/aoristStemMod')
const router = express.Router();

router.post('/voice', determineVoice);
//router.post('/settings', )
router.post('/form-the-present', formThePresent)
router.post('/form-the-present-subjunctive', formThePresentSubjunctive)
router.post('/form-the-present-subjunctive', formThePresentOptative)
router.post('/form-the-imperfect', formTheImperfect)
router.post('/stem-mod', Stem_mod)
router.post('/aorist-stem-mod', aoristStemMod)

module.exports = router;