import React,{ useEffect, useState }  from 'react'
import { Loading } from './Loading'
import { Post } from './Post'
import axios from "axios"


export const ContainerPost = () => {
    const URL ='http://localhost:8080/connection.database/articulo/mostrar'
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(URL).then((val)=>{
            const info = val.data
            setLoading(false)
            setData(info)
        }).catch((err)=>{
            console.log(err);
            setData([])
            setLoading(false)
        })
    }, [])
    if (loading) {
        return <Loading></Loading>
    }else{
        return(
            <div className='ctn-blog'>
                {
                    data.map((val)=>{
                        return(
                            <Post props={val}></Post>
                        )
                    })
                }
            </div>
        )
    }
}
