const middlewares = {

   authenticate(req, res, next) {
      const { authenticate } = req.headers
      const { user_id } = req.params

      if(!authenticate) return res.status(400).json({ msg: 'no token'})
      if(authenticate !== user_id) return res.status(400).json({msg: 'not allowed'})

      next()
   }
}

module.exports = middlewares