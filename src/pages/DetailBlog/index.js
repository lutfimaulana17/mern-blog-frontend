import React, { useEffect, useState } from 'react'
import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components'
import './detailBlog.scss'
import { useHistory, withRouter } from 'react-router-dom'
import Axios from 'axios'

const DetailBlog = (props) => {
    const history = useHistory()
    const [data, setData] = useState({})

    useEffect(() => {
        Axios.get(`http://localhost:4000/v1/blog/post/${props.match.params.id}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => {
                console.log('err: ', err)
            })
    }, [])

    if (Object.keys(data).length > 0) {
        return (
            <div className="detail-blog-wrapper">
                <img className="img-cover" src={`http://localhost:4000/${data.image}`} alt="thumb" />
                <p className="blog-title">{data.title}</p>
                <p className="blog-author">{data.author.name} - {data.createdAt}</p>
                <p className="blog-body">{data.body}</p>
                <Gap height={20} />
                <Link title="Kembali Ke Home" onClick={() => history.push('/')} />
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}

export default withRouter(DetailBlog)
