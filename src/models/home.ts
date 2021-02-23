const home = (sequelize: any, Sequelize: any) => {
  const User = sequelize.define(
    "Employee",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      firstname: {
        type: Sequelize.STRING,
      },
      lastname: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return User;
};

export default home;
