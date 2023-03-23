//  创建sql语句对象
const sqlMap = {
  usersql: {
    add: 'insert into user (username, email, password) values (?,?,?)',
    select: 'select * from user'
  }
}

module.exports = sqlMap;