//connection to MySQL stored in connection.js and the Mode and Datatypes used from the sequelize package
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

//define the columns in the Post, 
    //configure the naming conventions, and
    //pass the current connection instance to initialize the Post model.
// create fields/columns for Post model
Post.init(
    {
        //identified the id column as the primary key and set it to auto-increment
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        //defined the title column as a String value
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        //defined the post_url as a String and insured the url is a verified link by setting the isURL
        post_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //determines who posted the news article by using 
            //the references property we establish the relationship between this post and the user by creating 
                //a reference to the User model, specifically to the id column that is defined by the key property
            //the user_id is defined as the foreigm key and will be the matching link
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    //configure the meta data, including the naming conventions
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
    }
);

//3.4 step FOUR make the Post model accessible to other parts of the applicaiont
module.exports = Post;