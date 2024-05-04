
const express = require("express") ; 
const {getStores, addStore} = require("../controllers/stores") ; 

const router = express.Router() ; 

router.get('/', getStores) ; 
router.post('/', addStore) ; 


module.exports = router ; 