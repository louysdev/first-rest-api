const {Router} = require ('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Juanito",
        "web": "www.juanito.com"
    }

    res.json(data);
});

module.exports = router;