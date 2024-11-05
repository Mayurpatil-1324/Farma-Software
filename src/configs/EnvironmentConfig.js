const dev = {
	//   API_ENDPOINT_URL: 'http://192.168.0.147:8000/api'
	   API_ENDPOINT_URL: 'https://tms.crustycodes.com/backend/public/api'
	};
	
	const prod = {
	//   API_ENDPOINT_URL: 'http://192.168.0.147:8000/api'
	  API_ENDPOINT_URL: 'https://tms.crustycodes.com/backend/public/api'
	};
	
	const test = {
	//   API_ENDPOINT_URL: 'http://192.168.0.147:8000/api'
	   API_ENDPOINT_URL: 'https://tms.crustycodes.com/backend/public/api' 
	};
	
	const getEnv = () => {
		switch (process.env.NODE_ENV) {
			case 'development':
				return dev
			case 'production':
				return prod
			case 'test':
				return test
			default:
				break;
		}
	}
	
	export const env = getEnv()
	