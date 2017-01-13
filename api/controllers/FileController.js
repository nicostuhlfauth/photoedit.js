/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const path = require('path');
var fs = require('fs');

module.exports = {


  // compare: http://maangalabs.com/blog/2014/08/12/uploading-a-file-in-sails/

  upload: function (req, res) {
    if (req.method === 'GET') {
      return res.json({'status': 'GET NOT allowed'});
    }

    var uploadFile = req.file('uploadFile');
    uploadFile.upload({dirname: '../../assets/images'}, function onUploadComplete(err, files) {
      if(err) return res.serverError(err);

      var imagesGallery = JSON.parse(fs.readFileSync("assets/data/images.json", "utf8"));
      imagesGallery.push({filename: path.win32.basename(files[0].fd)});

      fs.writeFile("assets/data/images.json", JSON.stringify(imagesGallery), function(err) {
        if (err) {
          return console.log(err);
        }
      });


      setTimeout(function() {
        res.redirect('/editfile/' + path.win32.basename(files[0].fd));
      },
      3000
      );

    })
  }
};

