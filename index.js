const {VK} = require('vk-io');
const fs = require('fs')

var vk = new VK({
    token: process.env.TOKEN;
})

const base64String = fs.readFileSync(process.env.PATH_TO_BUFFER, 'utf8'); // buffered picture
const binaryData = new Buffer.from(base64String, 'base64');

vk.upload.conduct({
    field: 'photo',
    params: {
      source: { value: binaryData },
      crop_x: '',
      crop_width: 1920,
      crop_y: '',
      crop_height: 640
    },

    getServer: vk.api.photos.getOwnerCoverPhotoUploadServer,
    saveFiles: vk.api.photos.saveOwnerCoverPhoto,
    serverParams: ['crop_x', 'crop_height', 'crop_y', 'crop_width'],

    maxFiles: 1,
    attachmentType: 'photo'
  })
