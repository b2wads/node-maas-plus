module.exports = {
  async plus(req, res) {
    const { left, right } = req.body
    return res.status(200).json({ result: left + right })
  }
}
