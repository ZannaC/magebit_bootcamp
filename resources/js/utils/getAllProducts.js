function getAllProducts (url, body = {}) {
    return fetch(`/api/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('[name="csrf-token"]').getAttribute('content')
        },
        body: JSON.stringify(body)
        })
        .then(response => response.json())
}

export default getAllProducts;
