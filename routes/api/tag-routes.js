const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Category.findAll({
      attributes: ["tag_id", "tag_name"],
      include: [
        {
          model: Product,
          attributes: ["product_id", "product_name", "price", "stock", "category_id"],
          through: "ProductTag",
        },
      ],
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Category.findByPk(req.params.id, {
      attributes: ["tag_id", "tag_name"],
      include: [
        {
          model: Product,
          attributes: ["product_id", "product_name", "price", "stock", "category_id"],
          through: "ProductTag",
        },
      ],
    });
    if (!singleTag) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(singleTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
