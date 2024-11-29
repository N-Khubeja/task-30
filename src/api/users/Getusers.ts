export const Getusers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = res.json()
    return data
}