
export async function fetchMeals(){
    const response = await fetch('http://localhost:3000/meals');
    const data = await response.json();
    if(!response.ok){
        throw new Error(response.statusText || 'Error retrieving meals.');
    }
    return data;
}

export async function postOrder(order){
    const response = await fetch('http://localhost:3000/orders', {
        method: "POST",
        body: JSON.stringify({order}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    if(!response.ok){
        throw new Error(data.message ?? 'Error placing order.');
    }
    return data;
}