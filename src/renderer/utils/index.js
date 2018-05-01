var crypto = require('crypto');

const utils = {
    GetMD5: function(srouce) {
        var md5 = crypto.createHash("md5");
        md5.update(srouce);
        var str = md5.digest('hex');
        var results = str.toUpperCase(); //32位大写 
        return results
    }
}