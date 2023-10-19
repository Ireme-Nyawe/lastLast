import { error } from "console";
import multer from "multer";
import path from "path";

const uploadfile = multer({
    storage : multer.diskStorage({}),
    fileFilter : (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (
            ext !== ".png" &&
            ext !== ".jpg" &&
            ext !== ".jpeg" &&
            ext !== ".gif" &&
            ext !== ".tif" &&
            ext !== ".webp" &&
            ext !== ".bmp" &&
            ext !== ".tiff"
          ){
            return cb(new error("Invalid Image Format!", false))
          }
          cb(null, true);
    },
});

export default uploadfile