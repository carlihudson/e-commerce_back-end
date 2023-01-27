const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Product,
          attributes: ["id", "name", "price", "stock", "category_id"]
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

// get a single category by id
router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await Category.findByPk(req.params.id, {
      attributes: ["id", "name"],
      include: [
        {
          model: Product,
          attributes: ["id", "name", "price", "stock", "category_id"],
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

// EVERYTHING ABOVE THIS LINE IS WORKING 

  // create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    if (!newCategory) {
      res.status(404).json({ message: 'Please enter a category' });
      return;
    }
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryToUpdate = await Category.update(req.body, {
      where: {
        category_id: req.params.category_id,
      },
    });
    if (!categoryToUpdate[0]) {
      res.status(404).json({ message: 'No category with this id!' });
      return;
    }
    res.status(200).json(categoryToUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryToDelete = await Category.destroy({
      where: {
        id: req.params.category_id,
      },
    });
    if (!categoryToDelete) {
      res.status(404).json({ message: 'No product with this id!' });
      return;
    }
    res.status(200).json(categoryToDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
