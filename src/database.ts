import { Sequelize } from "sequelize";

export const sequelize: Sequelize = new Sequelize({
  database: 'challenge_db',
  username: 'user',
  password: '',
  dialect: 'sqlite',
  storage: './challenge_db.sqlite'
});

export const dbSync = async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Database synced');
  } catch (error) {
    console.error('Unable to sync database:', error);
  }
}



