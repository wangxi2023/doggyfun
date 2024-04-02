// user/index.js

const post = require('post');
const userActions = require('./userActions');

function createUser(username) {
    console.log(`User "${username}" has been created.`);
}

function getUserPosts(username) {
    console.log(`Fetching posts for user "${username}":`);
    post.getPostsByUser(username);
}

// Additional user actions
function editUserProfile(username) {
    console.log(`Editing profile for user "${username}".`);
}

function deleteUserPost(username, postId) {
    console.log(`Deleting post ${postId} for user "${username}".`);
}

module.exports = {
    createUser,
    getUserPosts,
    editUserProfile,
    deleteUserPost
};