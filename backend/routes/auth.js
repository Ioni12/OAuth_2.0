const express = require("express");
const {
  googleAuth,
  getCurrentUser,
  logout,
} = require("../controllers/authController");
const auth = require("../middleware/auth");

const router = express.Router();

// Google OAuth login/register
router.post("/google", googleAuth);

// Get current user (protected route)
router.get("/me", auth, getCurrentUser);

// Logout
router.post("/logout", auth, logout);

module.exports = router;
