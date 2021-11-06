const Category = require("../../models/category")

module.exports = {
    create,
    index,
  };

  async function index(req, res) {
    const category = await Category.find({}).populate('name').exec();
    res.json(category);
}
  
  async function create(req, res) {
    try {
      // Add the category to the database
      const category = await Category.create(req.body);
      res.json(category);
      
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
    }
  }