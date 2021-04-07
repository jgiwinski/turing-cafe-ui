const baseURL = 'http://localhost:3001/api/v1/reservations'; 

export const getRes = () => {
    return fetch(`${baseURL}`,)
        .then(response => response.json())
}

