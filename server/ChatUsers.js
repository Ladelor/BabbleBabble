//Stores and manages users in the chatroom
//This should eventually be an interface for a DB
class ChatUsers {
    constructor() {
        this.chatUsersDB = [];
    }

    //Adds a new user to the chatroom DB, only adds if a user of that name is not in
    //Params: a user object (intentionally abstract object to allow for easier changes)
    //Returns true on succesful add, false on fail
    addUser(user) {
        let foundUser = false;
        for (let i = 0; i < this.chatUsersDB.length; i++) {
            if (this.chatUsersDB[i].username === user.username) {
                foundUser = true;
                break;
            }
        }

        if (!foundUser) {
            user.hoursInChatroom = 0;
            this.chatUsersDB.push(user);
            return true;
        }
        else {
            return false;
        }
    }

    //Removes a user from chatroomDB
    //Params: string: username
    //No return, does nothing if username not found
    removeUser(username) {
        for (let i = this.chatUsersDB.length - 1; i >= 0; --i) {
            if (chatUsersDB[i].username === username) {
                chatUsersDB.splice(i, 1);
            }
        }
    }

    /*
    update() {
        for (let i = this.chatUsersDB.length - 1; i >= 0; --i) {
            this.chatUsersDB[i].hoursInChatroom++;
            if (this.chatUsersDB[i].hoursInChatroom > 24) {
                chatUsersDB.splice(i, 1);
            }
        }
    }
    */
}

module.exports.ChatUsers = ChatUsers;