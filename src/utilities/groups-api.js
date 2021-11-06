import sendRequest from './send-request';

const BASE_URL = '/api/groups';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getGroup(id) {
  return sendRequest(`${ BASE_URL }/${id}`);
}

export function getYear(id, yId) {
  return sendRequest(`${ BASE_URL }/${id}/${yId}`);
}



export function create(groupData) {
  return sendRequest(BASE_URL, 'POST', groupData)
}

export function updateGroup(groupData, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', groupData)
}

