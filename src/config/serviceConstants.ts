const baseUrl = 'https://dev-userapi.trophydev.top';
const webUrl = 'https://dev-user.trophydev.top';

// const baseUrl = 'https://staging-userapi.trophydev.top';
// const webUrl = 'https://staging-user.trophydev.top';

// const baseUrl = 'https://api.trofi.group';
// const webUrl = 'https://www.trofi.group';

if (!baseUrl) {
  throw new Error('API Url is not provided.');
}

export const JWTKey = 't60FiaP123';

export const WEB_ROUTE = `${webUrl}/`;
export const MAIN_ROUTE = `${baseUrl}/`;
export const API_ROUTE = `${baseUrl}/user/`;
