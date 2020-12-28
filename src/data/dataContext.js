
const basefetch = async (endpoint) =>{
    const req = await fetch(`https://api.github.com/users${endpoint}`)
    const json = await req.json();
    return json;
}

export default{
    getUser: async (props) => {
        return [
            {
                items: await basefetch('/'+props)
            }
        ]
    },

    getUsers: async (props) => {
        return [
            {
                items: await basefetch(props)
            }
        ]
    }
}