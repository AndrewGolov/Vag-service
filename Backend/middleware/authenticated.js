const {verify} = require('../helpers/token')
const User = require('../models/User')

module.exports = async (req, res, next) => {
	const {id} =  await verify(req.cookies.vag_token)
	const user = await User.findById({_id:id})
	if(!user){
		res.send({error:'Ошибка авторизации, пользователь не найден'})
		return
	}
	req.user = user
	next()
}
