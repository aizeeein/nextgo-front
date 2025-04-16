// ✅ client-safe delete action
async function DeleteUser({ endpoint }: { endpoint: string }) {
    const res = await fetch(endpoint, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!res.ok) {
      throw new Error("Failed to delete user");
    }
  
    return await res.json();
  }
  
  export default DeleteUser;
  