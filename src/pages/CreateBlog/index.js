import React, { useEffect, useState } from 'react'
import { Button, Gap, Input, Link, TextArea, Upload } from '../../components'
import './createBlog.scss'
import { useHistory, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setForm, setImgPreview, postToAPI, updateToAPI } from '../../config/redux/action'
import Axios from 'axios'

const CreateBlog = (props) => {
    const {form, imgPreview} = useSelector(state => state.createBlogReducer)
    const {title, body} = form
    const [isUpdate, setIsUpdate] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        console.log('params: ', props)
        if(props.match.params.id){
            setIsUpdate(true)
            Axios.get(`http://localhost:4000/v1/blog/post/${props.match.params.id}`)
                .then(res => {
                    const data = res.data.data
                    dispatch(setForm('title', data.title))
                    dispatch(setForm('body', data.body))
                    dispatch(setImgPreview(`http://localhost:4000/${data.image}`))
                })
                .catch(err => {
                    console.log('err: ', err)
                })
        }
    }, [])

    const onSubmit = () => {
        if(isUpdate) {
            updateToAPI(form, props.match.params.id)
        } else {
            postToAPI(form)
        }
    }

    const onImageUpload = (e) => {
        const file = e.target.files[0]
        dispatch(setForm('image', file))
        dispatch(setImgPreview(URL.createObjectURL(file)))
    }

    return (
        <div className="blog-post">
            <Link title="Kembali" onClick={() => history.push('/')} />
            <p className="title">{isUpdate ? 'Update' : 'Create New'} Blog Post</p>
            <Input label="Post Title" value={title} onChange={(e) => dispatch(setForm('title', e.target.value))} />
            <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
            <TextArea value={body} onChange={(e) => dispatch(setForm('body', e.target.value))} />
            <Gap height={20} />
            <div className="button-action">
                <Button title={isUpdate ? 'Update' : 'Simpan'} onClick={onSubmit} />
            </div>
            <Gap height={20} />
        </div>
    )
}

export default withRouter(CreateBlog)
