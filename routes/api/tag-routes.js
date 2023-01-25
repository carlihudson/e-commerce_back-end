const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
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

// get single tag by id
router.get('/:id', async (req, res) => {
  try {
    const singleTag = await Category.findByPk(req.params.tag_id, {
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

// create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    if (!newTag) {
      res.status(404).json({ message: 'Please enter a tag' });
      return;
    }
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

 // update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagToUpdate = await Tag.update(req.body, {
      where: {
        tag_id: req.params.tag_id,
      },
    });
    if (!tagToUpdate[0]) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(tagToUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  const tagToDelete = await Tag.findByPk(req.params.tag_id)
  Tag.destroy({
    where: {
      id: req.params.tag_id,
    },
  })
  .then(() => {
    res.json(`${tagToDelete} has been removed`)
  })
  .catch((err) => {
    res.json(err);
  })
});

module.exports = router;
