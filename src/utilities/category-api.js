import sendRequest from './send-request';

const BASE_URL = '/api/category';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function create(categoryData) {
  return sendRequest(BASE_URL, 'POST', categoryData)
}