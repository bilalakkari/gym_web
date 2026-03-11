// src/proxy.js
export const generatePortalLink = async (email) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/api/portal_link`, {
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