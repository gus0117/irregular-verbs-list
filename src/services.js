const SERVER_DOMAIN = "./data/data.json"

export const getVerbsList = async() => {
    try{
        const response = await fetch(SERVER_DOMAIN)
        return JSON.parse(JSON.stringify(response))
    }
    catch(e){
        throw new Error(e.message)
    }
}