export default {
    name: 'photographer',
    title: 'Photographer',
    type: 'document',
    fields: [
      {
        name: 'pName',
        title: 'PName',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'string',
      },
    //   {
    //     name: 'location',
    //     title: 'Location',
    //     type: 'geopoint',
    //   },
    {
        name: 'follow',
        title: 'Follows',
        type: 'array',
        of: [{ type: 'follow' }],// array of follower 
      },
      {
        name: 'pricePerHour',
        title: 'Price Per Hour',
        type: 'number',
      },
      {
        name: 'reviews',
        title: 'Reviews',
        type: 'array',
        of: [{ type: 'review' }],
      },
    ],
  };