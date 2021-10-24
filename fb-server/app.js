const compression = import('compression');
const express = import('express');
const app = express();
app.use(compression());
const router = express.Router()
const port = 5000;
app.listen(port, () => {
    console.log('Server at localhost:${port}')
});


router.get('/', function (req, res) {
    res.send('Pipeline Home Page');
})

module.exports = router;