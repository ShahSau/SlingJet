export default {
    name: 'postedBy',
    title: 'PostedBy',
    type: 'reference', //this refers to the user
    to: [{ type: 'user' }],
  };