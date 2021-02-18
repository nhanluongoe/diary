import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tran Van B',
    email: 'B@user.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Nguyen Van A',
    email: 'A@user.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
