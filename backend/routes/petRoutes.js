
const express = require('express');
const { createPet, loginUser, updateUserProfile, getProfile } = require('../controllers/petController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/addpets', createPet);
router.post('/login', loginUser);
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateUserProfile);

module.exports = router;
