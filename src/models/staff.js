// models/staff.model.js
export default (sequelize, DataTypes) => {
  const Staff = sequelize.define(
    "Staff",
    {
      staffId: {
        type: DataTypes.STRING,
        primaryKey: true, 
        allowNull: false,
        unique: true, 
      },
      user_id: {
        type: DataTypes.INTEGER,
        unique: true, 
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING, 
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: "staff",
      timestamps: false,
    }
  );

  // Associations
  Staff.associate = (models) => {
    // Link to the User table via user_id
    Staff.belongsTo(models.User, {
      foreignKey: "user_id",
      onDelete: "CASCADE",
      as: "user",
    });
  };

  return Staff;
};
