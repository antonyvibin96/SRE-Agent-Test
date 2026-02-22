function getUser(user) {
    if (user) {
        return user.id;
    } else {
        throw new Error('User is undefined');
    }
}