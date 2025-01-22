
 export const characterDispatcher = {
   get: async () => {
    const response = await fetch('https://www.swapi.tech/api/people', {method: 'GET'});
    const {results} = await response.json();
    return results;
   },
   
   getById: async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/people/${id}`, {method : 'GET'});
    const {result} = await response.json();
    console.log(result);
    return result.properties;
  }
}

export const planetDispatcher = {
  get: async () => {
   const response = await fetch('https://www.swapi.tech/api/planets', {method: 'GET'});
   const {results} = await response.json();
   return results;
  },

  getById: async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/planets/${id}`, {method : 'GET'});
    const {result} = await response.json();
    console.log(result);
    return result.properties;
  }
}

export const vehicleDispatcher = {
  get: async () => {
   const response = await fetch('https://www.swapi.tech/api/vehicles', {method: 'GET'});
   const {results} = await response.json();
   return results;
  },

  getById: async (id) => {
    const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, {method : 'GET'});
    const {result} = await response.json();
    console.log(result);
    return result.properties;
  }
}



