module.exports = function(dept) {
      return function(req, res, next) {
            if (
                  res.user.departments &&
                  Array.isArray(req.user.departments) &&
                  req.user.departments.includes(dept)) {
                  next()
            } else {
                  res.status(403).json({ message: "you shouldn't be here" })
            }
      }
};