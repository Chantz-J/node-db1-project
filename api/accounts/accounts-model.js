const db = require("../../data/db-config.js")

const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where("id", id).first()

}

 async function create({name, budget}){
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert({name, budget})
  return getById(id)
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
