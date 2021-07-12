let token = `42faeebb8bf8d3c141af8252dc92ad12093a71e148256596`

export const serverCalls = {
    get: async () => {
        const response = await fetch(`http://127.0.0.1:5000/api/hero`,{
            method: 'GET',
            headers: {
                "access-control-allow-orgin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/hero`,{
            method: 'POST',
            headers: {
                "access-control-allow-orgin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`http://127.0.0.1:5000/api/hero/${id}`, {
            method: 'POST',
            headers: {
                "access-control-allow-orgin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

    },
    delete: async(id:string) => {
        const response = await fetch(`http://127.0.0.1:5000/api/hero/${id}`,{
            method: 'DELETE',
            headers: {
                "access-control-allow-orgin": "*",
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })

    }
}