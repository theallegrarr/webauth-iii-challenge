const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
  // findByDepartment
};

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function findBy(filter) {
  return db('users').where(filter);
}

function find() {
  return db('users').select('id', 'username', 'password', 'department');
}

function findById(id) {
  return db('users')
    .where({ id })
    .first();
}
