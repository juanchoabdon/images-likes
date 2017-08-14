import ENV from './config/env';

const api = {
    
      async getRandomImage() {
        const response = await fetch(`${ENV.api_url}photos/random/?w=500&h=300&client_id=${ENV.client_id}`)
        return await response.json();
      }

    }
    
    
export default api;
    