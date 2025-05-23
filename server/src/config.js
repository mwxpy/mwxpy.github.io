/**
 * 开发模式说明：
 * 开启 devMode，Token 不会验证有效性，所有的合法 Token 都会通过验证
 * 关闭 devMode 后，Token 会验证有效性，防止 Token 泛滥
 */
const sysConfig = {
  devMode: process.env.NODE_ENV === 'development', // 是否开启开发模式
  port: process.env.NODE_PORT ? Number(process.env.NODE_PORT) : 8080,
  pwdSaltRound: 10,
  tokenSalt: "awsl",
  tokenExp: 3600 * 24 * 14, // 14 Days 用户单次登录的时长
  maxDevice: 3 // Token 可存放的设备数
}

const databaseConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "root123",
  name: "dormitory",
  rebuild: process.env.DB_REBUILD ? JSON.parse(process.env.DB_REBUILD) : false, // 是否每次重启服务器时重建数据库
  logging: process.env.NODE_ENV === 'development' // 是否再控制台输出建表语句
}

module.exports = {
  sysConfig,
  databaseConfig
}
