// src/proxy.js
const url = 'https://gym-api-e687cd3d06dc.hosted.ghaymah.systems';

export const generatePortalLink = async (email) => {
    try {
        const res = await fetch(`${url}/api/portal_link`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message || "Failed");

        return data.url;
    } catch (err) {
        console.error(err);
        throw err;
    }
};