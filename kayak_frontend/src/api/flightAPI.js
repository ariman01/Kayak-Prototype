const headers = {
    'Accept': 'application/json'
};
export function searchflightsAPI(payload)
{
    console.log("its api"+payload);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode: 'cors',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3010/flights/searchflights', requestOptions)
        .then((response) =>{
            return response;

        });
}
export function bookflightAPI(payload)
{
    console.log("its api"+payload);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode: 'cors',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3010/flights/bookflight', requestOptions)
        .then((response) =>{
            return response;

        });
}