import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 57a2474e097782f1b88bb306017fd02cef4f1c66008a586c9a713fdb8adf7524',
	},
});
