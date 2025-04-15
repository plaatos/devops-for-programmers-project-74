require('dotenv').config();

// Функция для логирования переменных окружения
const logEnvVariable = (name, value) => {
  if (!value) {
    console.warn(`⚠️ Warning: Environment variable ${name} is not defined. Using default value.`);
  } else {
    console.log(`✅ ${name}: ${value}`);
  }
};

// Логирование переменных окружения
logEnvVariable('DATABASE_HOST', process.env.DATABASE_HOST || 'db');
logEnvVariable('DATABASE_NAME', process.env.DATABASE_NAME || 'postgres');
logEnvVariable('DATABASE_USERNAME', process.env.DATABASE_USERNAME || 'postgres');
logEnvVariable('DATABASE_PASSWORD', process.env.DATABASE_PASSWORD || 'password');
logEnvVariable('DATABASE_PORT', process.env.DATABASE_PORT || 5432);

module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite',
  },
  production: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'db',
  },
  test: {
    dialect: 'postgres',
    database: process.env.DATABASE_NAME || 'postgres',
    username: process.env.DATABASE_USERNAME || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    port: process.env.DATABASE_PORT || 5432,
    host: process.env.DATABASE_HOST || 'db',
    logging: false, // Отключение логов Sequelize
  },
};