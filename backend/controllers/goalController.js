// Get goals
const getGoals = async (req, res) => {
  res.status(200).json({ message: 'Get goals' });
};

// Post goal
const setGoal = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please enter some text');
  }
  res.status(200).json({ message: 'Set goals' });
};

// Update goal
const updateGoal = async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// Delete goal
const deleteGoal = async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
