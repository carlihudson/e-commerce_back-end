const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ["category_id", "category_name"],
      include: [
        {
          model: Product,
          attributes: ["product_id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get a single category
router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      attributes: ["category_id", "category_name"],
      include: [
        {
          model: Product,
          attributes: ["product_id", "product_name", "price", "stock", "category_id"],
        },
      ],
    });
    if (!singleCategory) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(singleCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
