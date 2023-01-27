const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// get all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Product,
          attributes: ["id", "name", "price", "stock", "category_id"],
          through: ProductTag
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
    const singleTag = await Tag.findByPk(req.params.id, {
      attributes: ["id", "name"],
      include: [
        {
          model: Product,
          attributes: ["id", "name", "price", "stock", "category_id"],
          through: ProductTag 
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

// EVERYTHING ABOVE THIS LINE IS WORKING

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
        id: req.params.id,
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
  const tagToDelete = await Tag.findByPk(req.params.id)
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
