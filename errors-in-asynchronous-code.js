async function fetchUserData(userId) {
    console.log(`Requesting data for ID: ${userId} ...`);

    await new Promise(resolve => setTimeout(resolve, 2000));

    const serverUp = Math.random() > 0.3;
    if (!serverUp) {
        throw new Error("Invalid User ID (404)");
    }
    return { id: userId, name: "Tom", role: "Admin" };
}
async function main() {
    try {
        const user = await fetchUserData(0);
        console.log("Data received0:", user);
    } catch(error){
        console.log("Upload error:" + error.message);
    } finally {
        console.log("The connection attempt has completed.")
    }
}
main();
