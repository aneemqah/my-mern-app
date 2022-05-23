// Register a new user

const registerUser = (req, res) => {
  res.json({ message: 'Register user' });
};

// Authenticate a user
// POST /api/users/login
const loginUser = (req, res) => {
  res.json({ message: 'Login user' });
};

// Get a logged in User data
// GET /api/users/user
const getMe = (req, res) => {
  res.json({ message: 'User data' });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
