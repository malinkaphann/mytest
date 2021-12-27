
import fetch from 'node-fetch';

async function fetchPrice() {
    return await fetch('https://api.coinbase.com/v2/prices/spot?currency=USD');
}

async function timedFetch() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(async () => {
            const data = await fetchPrice();
            resolve(console.log(`round: ${i}:`, await data.json()));
        }, 3000);
    });
    return promise;
}

for (var i = 0; i < 10; i++) {
    await timedFetch();
}
