import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const saltRounds = 10;
const tokenSecretKey = 'secretToken';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, // 띄어쓰기 없애기
    unique: true,
  },
  password: {
    type: String,
    minlength: 5
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
});

// 유저 정보를 저장하기 전에 무엇을 한다는 액션
userSchema.pre('save', function(next) {
  let user = this;
  if(user.isModified('password')) {
    // 비밀번호를 암호화 시킨다.
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if(err) return next(err)
      bcrypt.hash(user.password, salt, function (err, hash) {
        if(err) return next(err)
        user.password = hash
        next()
      })
    })
  } else {
    next()
  }
});

userSchema.methods.comparePassword = function (plainPassword, cb) {
  // plainPassword 와 암호화된 비밀번호가 같은지 체크한다.
  bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
      cb(null, isMatch)
  })
}

userSchema.methods.generateToken = function (cb) {
  let user = this;
  // jsonwebtoken을 이용해서 token을 생성하기
  user.token = jwt.sign(user._id.toHexString(), tokenSecretKey);
  user.save().then(() => {
    return cb(null, user)
  }).catch((err) => {
    return cb(err)
  })
}

userSchema.statics.findByToken = function (token, cb) {
  let user = this;
  // 토큰을 decode 한다.
  jwt.verify(token, tokenSecretKey, function (err, decoded) {
    // 유저 아이디를 이용해서 유저를 찾은 다음에
    // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인
    user.findOne({"_id": decoded, "token": token}).then((user) => {
      return cb(null, user)
    }).catch((err) => {
      return cb(err);
    })
  })
}

const User = mongoose.model('User', userSchema);

export { User }