"use strict";
const express_1 = require("express");
const controller_1 = require("../controllers/decorators/controller");
const router = (0, express_1.Router)();
// router.get('/sign-in', (req: Request, res: Response) => {
//     res.send('hello, crypto server is responding')
// })
router.use(controller_1.router);
module.exports = router;
