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
      schoolId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        field: 'school_id',
      },
      schoolName: {
        type: DataTypes.STRING,
        field: 'school_name'
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      },
      emailIsVerified: {
        type: DataTypes.BOOLEAN,
        field: 'email_is_verified',
        defaultValue: false
      },
      emailVerificationId: {
        type: DataTypes.UUID,
        field: 'email_verification_id'
      },
      emailVerificationSentOn: {
        type: DataTypes.DATE,
        field: 'email_verification_sent_on'
      },
      passwordVerificationId: {
        type: DataTypes.UUID,
        field: 'password_verification_id'
      },
      passwordVerificationSentOn: {
        type: DataTypes.DATE,
        field: 'password_verification_sent_on'
      },
      passwordVerificationActive: {
        type: DataTypes.BOOLEAN,
        field: 'password_verification_active',
        defaultValue: false
      },
      normalHURanking : {
        type: DataTypes.INTEGER,
        field: 'normal_hu_ranking',
        defaultValue: 1500
      },
      rankedHURanking : {
        type: DataTypes.INTEGER,
        field: 'ranked_hu_ranking',
        defaultValue: 1500
      }
    },
    {
      tableName: 'users',
    }

  )
  return User;
}
