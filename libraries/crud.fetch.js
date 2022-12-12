import fetch from 'node-fetch';
const BACKEND_API = process.env.NEXT_PUBLIC_BACKEND_API;

// GETTING all API cruds
export const GET_cruds = (url, token) =>
	fetch(BACKEND_API + url, { headers: { auth: token } }).then((res) =>
		res.json()
	);

// GETTING a API crud
export const GET_crud = (url, token) =>
	fetch(BACKEND_API + url, { headers: { auth: token } }).then((res) =>
		res.json()
	);

// CREATING a API crud
export const POST_crud = (url, data) =>
	fetch(BACKEND_API + url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());

// UPDATING a API crud
export const PUT_crud = (url, data, token) =>
	fetch(BACKEND_API + url, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			auth: token,
		},
	}).then((res) => res.json());

// DELETING a API crud
export const DEL_crud = (url, token) =>
	fetch(BACKEND_API + url, {
		method: 'DELETE',
		headers: { auth: token },
	}).then((res) => res.json());

