import express from 'express';
import {User} from "../models/User.js";
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', (req, res) => {
  // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body);
  user.save().then(() => {
    res.status(200).json({
      success: true
    })
  })
    .catch((err) => {
      res.json({
        success: false,
        err
      })
    })
})

router.post('/login', (req, res) => {
  // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
  User.findOne({email: req.body.email})
    .then( user => {
      if(!user) {
        return res.json({
          loginSuccess: false,
          errorType: "email",
          message: "이메일이 존재하지 않습니다."
        })
      }
      // 요청된 이메일이 데이터베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch)
          return res.json({
            loginSuccess: false,
            errorType: "password",
            message: "비밀번호가 틀렸습니다."
          })

        // 비밀번호까지 맞다면 토큰을 생성하기.
        user.generateToken((err, user) => {
          if (err) return res.status(400).send(err)
          // 토큰을 쿠키에 저장한다.
          res.cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userId: user._id })
        })
      })
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
})

router.get('/auth', auth , (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 1,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image
  })
})

router.get('/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id},
    {token: ""}
  ).then(() => {
    return res.status(200).send({
      success: true
    })
  }).catch((err) => {
    res.json({success: false, err})
  })
})

export default router;