async function qeue(url, method, data=null) {
    // Thunder client
    let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
    
    const config = { method, headers: headersList }

    if (data) {
        config.body = JSON.stringify(data)
    }

    const response = await fetch(url, config)

    return response.json();
}