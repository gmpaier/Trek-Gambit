const router = require('express').Router();
const { User } = require('../../models');

router.post('/login', async (req, res) => {
  try {
      const validEmail = await User.findOne({where: {email: req.body.email}});
      console.log('email',validEmail);
      if (!validEmail) {
          res.status(400).json({ message: 'Password or Email is incorrect, please try again'});
          return;
      }
      console.log('req.body.password',req.body.password);
      const validPassword = await validEmail.checkPassword(req.body.password);
      
      if (!validPassword) {
          res.status(400).json({ message: 'Password or Email is incorrect, please try again'});
          return;
      };
      
      req.session.user_id = validEmail.id;
      req.session.logged_in = true;
      req.session.first = validEmail.first_name
      req.session.last = validEmail.last_name
      

      res.status(200)
  } catch (err) {
      res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
      req.session.destroy(() => {
          res.status(200).end();
      });
  } else {
      res.status(400).end
  }
});

router.post('/signup', (req, res) => {
  User.create(req.body)
  .then((newUser) => {
      res.send(newUser);
  })
  .catch ((err) => {
      res.json(err);
  })
});

module.exports = router;