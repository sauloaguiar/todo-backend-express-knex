const authService = require('./auth.service.js');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.authenticateUser(email, password);
    req.session.userId = user.id;
    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.logout = (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ error: 'Failed to logout' });
    }
    res.json({ message: 'Logged out successfully' });
  });
};