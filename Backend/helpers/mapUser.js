module.exports = (user) => ({
	"id": user._id,
	"login": user.login,
	"roleId": user.role,
})
