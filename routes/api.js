/*
 * Serve JSON to our AngularJS client
 */

exports.articles = function (req, res) {
  res.json({
    "data": {
      "List of articles": [
        {
          "Id": 1,
          "Title": 'Article 1',
          "Image": 'https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg',
          "Body": 'Article 1 text goes here',
          "Date Published": '2016-05-19',
          "Category Id": 1
        },
        {
          "Id": 3,
          "Title": 'Article 3',
          "Image": 'http://res.cloudinary.com/demo/image/upload/w_133,h_133,c_thumb,g_face/bike.jpg',
          "Body": 'Article 3 text goes here',
          "Date Published": '2016-05-19',
          "Category Id": 3
        },
        {
          "Id": 2,
          "Title": 'Article 2',
          "Image": 'http://web.horde.org/static/img/no-image-340x190.png',
          "Body": 'Article 2 text goes here',
          "Date Published": '2016-05-19',
          "Category Id": 2
        },
        {
          "Id": 4,
          "Title": 'Article 4',
          "Image": 'http://res.cloudinary.com/demo/image/upload/w_133,h_133,c_thumb,g_face/bike.jpg',
          "Body": 'Article 4 text goes here',
          "Date Published": '2016-05-19',
          "Category Id": 2
        },
        {
          "Id": 5,
          "Title": 'Article 5',
          "Image": 'https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg',
          "Body": 'Article 5 text goes here',
          "Date Published": '2016-05-19',
          "Category Id": 2
        },
        {
          "Id": 6,
          "Title": 'Article 6',
          "Image": 'https://pixabay.com/static/uploads/photo/2015/10/01/21/39/background-image-967820_960_720.jpg',
          "Body": 'Article 6 text goes here',
          "Date Published": '2016-05-19',
          "Category Id": 2
        },
        {
          "Id": 7,
          "Title": 'Article 7',
          "Image": 'http://web.horde.org/static/img/no-image-340x190.png',
          "Body": 'Article 7 text goes here',
          "Date Published": '2016-05-19',
          "Category Id": 2
        }
      ],
      "List of categories": [
        {
          Name: 'Cat 1',
          Id: 1
        },
        {
          Name: 'Cat 2',
          Id: 2
        },
        {
          Name: 'Cat 3',
          Id: 3
        },
        {
          Name: 'Cat 4',
          Id: 4
        }
      ]
    }
  });
};