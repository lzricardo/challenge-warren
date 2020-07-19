class ScrapperController {
  async execute(req, res) {
    try {

    } catch (e) {
      return res.status(500).json(
        {
          error: {
            message: 'Server internal error. Contact the administrator.'
          }
        }
      );
    }
  }
}

module.exports = new ScrapperController;