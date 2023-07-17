// Content routes
var express = require('express');
var router = express.Router();
var contentController = require('../../controllers/contentController');
const multer = require('multer');
const path = require('path');
const ROLES_LIST  = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/images");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_'+ path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

router.get('/',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin,ROLES_LIST.contentEditor,ROLES_LIST.contentUser), contentController.getAllContent );
router.get('/imageAbout', verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin,ROLES_LIST.contentEditor,ROLES_LIST.contentUser),contentController.getAllAboutImages);
router.delete('/imageAbout/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin), contentController.deleteAboutImage);
router.post('/imageAbout' ,[verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin,ROLES_LIST.contentEditor), upload.single("file")], contentController.createAboutImage);
router.get('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin,ROLES_LIST.contentEditor,ROLES_LIST.contentUser), contentController.getContentById );
router.post('/',[verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin,ROLES_LIST.contentEditor), upload.single('file')], contentController.createContent );
router.put('/:id',[verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin,ROLES_LIST.contentEditor), upload.single('file')], contentController.updateContent );
router.delete('/:id',verifyRoles(ROLES_LIST.Admin,ROLES_LIST.contentAdmin), contentController.deleteContent );



module.exports = router;
