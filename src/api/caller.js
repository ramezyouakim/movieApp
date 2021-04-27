export default async function caller(url, method, body) {
    console.log(url)
    return fetch(url, {
        method: method,
        body: body
    }).then((response) => {
        console.log(response)
        return response;
    }).catch((err) => {
        return err;
    })
}