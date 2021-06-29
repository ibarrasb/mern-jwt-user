import {useState, useEffect} from 'react';
import axios from 'axios'

function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [callback, setCallback] = useState(false)
    const [name, setName] = useState([])

    useEffect(() =>{
        if(token){
            const getUser = async () =>{
                try {
                    const res = await axios.get('/user/infor', {
                        headers: {Authorization: token}
                    })
                    setName(res.data.name.split(' ')[0])
                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    console.log(res.data)
                    
                } catch (err) {
                    alert(err.response.data.msg)
                    
                }
            }
            getUser()
        }

    },[token])



    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        callback: [callback, setCallback],
        name: [name, setName]
    }
}

export default UserAPI
 