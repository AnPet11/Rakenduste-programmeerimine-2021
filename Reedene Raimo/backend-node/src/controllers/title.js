/* const Item = require('../models/Item') kausta nimi oli item

exports.getItems = async (req, res) => {
  const items = await Item.find({})
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const newItem = {
  name: "Table",
  quality: 99,
  unused: true,
  color: "blue"
  }
  const createdItem = new Item(newItem)
  //const createdItem = new Item(req.body)

  const savedItem = await createdItem.save()
  res.status(200).send(`yay ${savedItem._id}`)
}

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  var flag = 1;
  const item = await Item.findOneAndUpdate({ _id: id },{$inc: {quality: flag}}, req.body);

  if (!item) res.status(404).send("No item with that id found");

  const item2 = await Item.find({ _id: id })

  res.status(200).send(`Successfully updated the following item: \n ${item2}`)

}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;

  const item = await Item.findOneAndDelete({ _id: id })

  if (!item) res.status(404).send("No item with that id found")

  res.status(200).send(`Successfully deleted the following item: \n ${item}`)

} */

const Title = require('../models/Title')

exports.getTitles = async (req, res) => {
  const titles = await Title.find({})
  
  res.status(200).send(titles)
}

exports.createTitle = async (req, res) => {
  // Saaksite info kätta req.body -st

  const { name, unused, color } = req.body;
  const newTitle = {
    name: title.name,
    quality: title.quality,
    unused: title.unused,
    color: title.color
  }

  const createdTitle = new Title(newTitle)

  const savedTitle = await createdTitle.save()

  res.status(200).send(`yay ${savedTitle._id}`)
}

exports.updateTitle = async (req, res) => {
  const { id } = req.params;

  const title = await Title.findOne({ _id: id })
  if (!title) res.status(404).send("No title with that id found")

  const { name, unused, color } = req.body;
  if (name) title.name = name;
  if (unused) title.unused = unused;
  if (color) title.color = color;
  title.quality++;
  title.save();

  res.status(200).send(`Successfully updated the following title: \n ${title}`)
}

exports.deleteTitle = async (req, res) => {
  const { id } = req.params;

  const title = await Title.findOneAndDelete({ _id: id })

  if (!title) res.status(404).send("No title with that id found")

  res.status(200).send(`Successfully deleted the following title: \n ${title}`)
}