import fetch from 'node-fetch';
const API = process.env.NEXT_PUBLIC_API;
export const GET_Fetcher = (url = '/') =>
  fetch(API + url, { method: 'GET' })
    .then((res) => res.json())
    .catch(({ message }) => console.log(message));
export const POST_Fetcher = (url) =>
  fetch(API + url, { method: 'POST' })
    .then((res) => res.json())
    .catch(({ message }) => console.log(message));
export const PUT_Fetcher = (url) =>
  fetch(API + url, { method: 'PUT' })
    .then((res) => res.json())
    .catch(({ message }) => console.log(message));
export const DELETE_Fetcher = (url) =>
  fetch(API + url, { method: 'DELETE' })
    .then((res) => res.json())
    .catch(({ message }) => console.log(message));
