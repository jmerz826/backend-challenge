const noteService = require('app/modules/note')

/**
 * @method readAll
 */
exports.readAll = async (req, res) => {
  const user = await noteService.findAllByUserId(req.params.id)
  res.status(200).send(user)
}
