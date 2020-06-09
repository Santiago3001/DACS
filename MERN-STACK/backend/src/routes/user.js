const {Router} = require ('express');
const router = Router();

const {getUsers,createUser, deleteUser} = require ('../controllers/user')

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)

module.exports = router;

