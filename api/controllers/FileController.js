/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  upload: function (req, res) {
    if (req.method === 'GET') {
      return res.json({'status': 'GET NOT allowed'});
    }

    var uploadFile = req.file('uploadFile');
    uploadFile.upload({dirname: '../../assets/images'}, function onUploadComplete(err, files) {
      if(err) return res.serverError(err);
      console.log(files);
      res.json({status: 200, file: files});
    })
  }
};

