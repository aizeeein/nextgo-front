'use server'

interface CreateUserProps {
    endpoint: string;
    method: string;
    form: any
}
async function CreateUser ({endpoint, method, form}: CreateUserProps) {
    const res = await fetch(endpoint, {
        method, headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
    })

    if (!res.ok) {
        throw new Error("Failed to send request")
    }

    return res.json()
}

export default CreateUser