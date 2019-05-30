module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING,
        field: "first_name"
      },
      lastName: {
        type: DataTypes.STRING,
        field: "last_name"
      },
      email: {
        unique: true,
        type: DataTypes.STRING,
        set(val) {
          this.setDataValue('email', val ? val.toLowerCase() : val);
        }
      },
      password: {
        type: DataTypes.STRING
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      emailIsVerified: {
        type: DataTypes.BOOLEAN,
        field: 'email_is_verified',
        defaultValue: false
      },


    }
  )
  return User;
}