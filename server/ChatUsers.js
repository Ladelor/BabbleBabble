//This should eventually be an interface for a DB
class ChatUsers {
    constructor() {
        this.chatUsersDB = [];
    }

    addUser(user) {
        let foundUser = false;
        for (let i = 0; i < this.chatUsersDB.length; i++) {
            if (this.chatUsersDB[i].username === user.username) {
                foundUser = true;
                break;
            }
        }

        if (!foundUser) {
            this.chatUsersDB.push(user);
            return false
        }
        else {
            return true;
        }
    }

    removeUser(username) {
        for (var i = this.chatUsersDB.length - 1; i >= 0; --i) {
            if (chatUsersDB[i].username === username) {
                chatUsersDB.splice(i, 1);
            }
        }
    }
}

module.exports.ChatUsers = ChatUsers;