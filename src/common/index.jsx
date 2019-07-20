const paths = {
  home: '/',
  dashboard: {
    base: '/dashboard',
    sections: '/dashboard/sections',
    admin: '/dashboard/admin',
    details: '/dashboard/details'
  },
};

export const endpoints = () => {
  const { REACT_APP_API_URL } = process.env;

  return {
    articlesGetAll: `${REACT_APP_API_URL}articles`,
    articlesPost: `${REACT_APP_API_URL}protected/articles`,
    articlesGetOne: id => `${REACT_APP_API_URL}articles/${id}`,
    articlesPut: id => `${REACT_APP_API_URL}protected/articles/${id}`,
    articlesDelete: id => `${REACT_APP_API_URL}protected/articles/${id}`,
    adminLogin: `${REACT_APP_API_URL}admin`,
    sendEmail: `${REACT_APP_API_URL}email`,
  };
};

export const messages = {
  NETWORK_ERROR: 'Network Error!',
  SUCCESS: 'All Good',
  DUPLICATE_MESSAGE: 'Entry already exists',
};

export const serverResponses = {
  DUPLICATE: 'duplicate key error',
};

export const localFiles = {
  images: {
    logo: './images/logo.png',
    prismBackground: './images/prism.png',
  },
};

export const article = 'ARTICLE';
export const about = 'ABOUT';
export const carousel = 'CAROUSEL';
export const entityTypes = [
  article,
  about,
  carousel,
];

export const removeUnsupportedProperties = (passedEntity, unsupportedProperties) => {
  const entity = passedEntity;
  unsupportedProperties.map(property => delete entity[property]);
  return entity;
};


export default paths;
