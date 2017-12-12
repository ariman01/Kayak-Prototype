const headers = {
    'Accept': 'application/json'
};
export function searchhotelsAPI(payload) {
    console.log("its api" + payload.src_city+payload.capacity);
    const requestOptions = {
        method: 'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {...headers, 'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3010/hotels/searchhotels', requestOptions)
        .then((response) => {
            return response;

        });
}
export function bookhotelAPI(payload)
{
    console.log("its api"+payload);
    const requestOptions = {
        method: 'POST',
        credentials:'include',
        mode: 'cors',
        headers: { ...headers,'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return fetch('http://localhost:3010/hotels/bookhotel', requestOptions)
        .then((response) =>{
            return response;

        });
}
