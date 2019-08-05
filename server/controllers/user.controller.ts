import { Request, Response } from 'express';
import UserModel, { User } from '../models/user.model';
import bcrypt from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';

const UserController = {
  register(req: Request, res: Response): Response | void {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Enter all fields' });
    }

    UserModel
      .findOne({ email })
      .then(user => {
        if (user) {
          res.status(400).json('User already exists');
        } else {
          const newUser: User = new UserModel({
            name,
            email,
            password
          });

          bcrypt
            .hash(newUser.password, config.get('bcrypt.salt'))
            .then(hashedPassword => {
              newUser.password = hashedPassword;

              newUser
                .save()
                .then(user => {
                  const token = jwt.sign(
                    { id: user.id },
                    config.get('jwt.secret'),
                    { expiresIn: config.get('jwt.expiresIn') }
                  );

                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email
                    }
                  });
                })
                .catch();
            })
            .catch(error => {
              throw error;
            });

        }
      })
      .catch();
  },
  auth(req: Request, res: Response): Response | void {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Enter all fields' });
    }

    UserModel
      .findOne({ email })
      .then(user => {
        if (!user) {
          return res.status(400).json({ message: 'User does not exist' });
        }

        bcrypt
          .compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) {
              return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign(
              { id: user.id },
              config.get('jwt.secret'),
              { expiresIn: config.get('jwt.expiresIn') }
            );

            res.json({
              token,
              user: {
                id: user.id,
                name: user.name,
                email: user.email
              }
            });
          })
          .catch();
      })
      .catch();
  },
  info(req: Request, res: Response): Response | void {
    // FIXME: Property 'user' does not exist on type 'Request'.
    // UserModel
    //   .findById(req.user.id)
    //   .select('-password')
    //   .then(user => res.status(200).json(user))
    //   .catch();
  }
};

export default UserController;