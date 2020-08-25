const db = require("../data/config")

function findPostsByUserId(userId) {
    return db("posts as p")
		.innerJoin("users as u", "u.id", "p.user_id")
		.where
		("p.user_id", userId)
		// .where({ user_id: req.params.id })
		.select("p.id", "p.contents", "u.username")
}

module.exports = {
    findPostsByUserId,
}