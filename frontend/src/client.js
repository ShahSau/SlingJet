import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-12-22',
  useCdn: true, // to show images on front side more quickly
  token: process.env.REACT_APP_SANITY_TOKEN,
});

//Quickly generate image urls from Sanity image records. This helper will by default respect any crops/hotspots specified in the Sanity content provided to it
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);