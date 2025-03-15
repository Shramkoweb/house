interface Body {
    query: string;
}

const baseUrl = "http://localhost:9000";

export const server = {
    fetch: async (body: Body) => {
        const res = await fetch(`${baseUrl}/api`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        });

        return res.json();
    }
};
