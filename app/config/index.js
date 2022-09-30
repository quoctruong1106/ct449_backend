const config = {
    app: {
        port: process.env.PORT || 3000,
    },

    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://truongb1913349:quoctruong1106@cluster0.2mdooog.mongodb.net/contacts"
    }
}

module.exports = config;
