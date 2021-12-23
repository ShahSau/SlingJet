export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};
export const categories = [
  {
    name: "landscape",
    image:
      "https://images.unsplash.com/photo-1614102073832-030967418971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
  },
  {
    name: "wedding",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "macro",
    image:
      "https://images.unsplash.com/photo-1526718381584-ebd2726df29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=808&q=80",
  },
  {
    name: "fashion",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
  },
  {
    name: "wildlife",
    image:
      "https://images.unsplash.com/photo-1549480017-d76466a4b7e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80",
  },
  {
    name: "portrait",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "nature",
    image:
      "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    name: "others",
    image:
      "https://images.unsplash.com/photo-1497005367839-6e852de72767?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80",
  },
];
export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
  image{
    asset->{
      url
    }
  },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    } `;
export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
        image{
          asset->{
            url
          }
        },
        _id,
        title, 
        about,
        category,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
       save[]{
          postedBy->{
            _id,
            userName,
            image
          },
        },
        comments[]{
          comment,
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        }
      }`;
  return query;
};
export const pinDetailMorePinQuery = (pin) => {
const query = `*[_type == "pin" && category == '${pin.category}' && _id != '${pin._id}' ]{
  image{
    asset->{
      url
    }
  },
  _id,
  destination,
  postedBy->{
    _id,
    userName,
    image
  },
  save[]{
    _key,
    postedBy->{
      _id,
      userName,
      image
    },
  },
}`;
return query;
};

// followings are the examples of sanity's GROQ(Graph-Relational-Object-Query)
export const searchQuery = (searchTerm) => {
  const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
  return query;
};
