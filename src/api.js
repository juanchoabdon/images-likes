const api = {
    
      async getRandomImage() {
        const response = await fetch("https://api.unsplash.com/photos/random/?w=500&h=300&client_id=77e5211098c79fb3144be20c650d9890f5c267fa910f44697f34883e3be1eef3" )
        return await response.json();
      }

    }
    
    
export default api;
    