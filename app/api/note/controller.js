const noteService = require('app/modules/note')

/**
 * @method create
 */
exports.create = async (req, res) => {
  const note = await noteService.create({
    ...req.body,
    userId: req.userId
  })
  res.status(201).send(note)
}
