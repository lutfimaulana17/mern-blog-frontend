import React from 'react'
import { RegisterBg } from '../../assets'
import { Gap, Link } from '../../components'
import './detailBlog.scss'
import { useHistory } from 'react-router-dom'

const DetailBlog = () => {
    const history = useHistory()

    return (
        <div className="detail-blog-wrapper">
            <img className="img-cover" src={RegisterBg} alt="thumb" />
            <p className="blog-title">Title Blog</p>
            <p className="blog-author">Author - Date Post</p>
            <p className="blog-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam sapien, congue nec turpis a, imperdiet dapibus diam. Morbi fringilla aliquam laoreet. Vestibulum non lacus at neque lacinia egestas. Duis finibus porttitor lacus, et dapibus eros commodo lacinia. Aliquam id enim in velit pellentesque luctus commodo at ex. Vestibulum fermentum auctor mauris eu lacinia. Nulla luctus eget sem eget lacinia. Vivamus mi nisi, pretium non nisl quis, placerat vulputate leo. Sed libero turpis, euismod ac aliquam id, imperdiet at quam. Pellentesque est sapien, vestibulum in urna vitae, ullamcorper sollicitudin massa. Ut tincidunt nisl et turpis eleifend, vitae auctor nulla accumsan. Duis mollis rutrum metus. Curabitur fringilla tellus eu ex venenatis, ac pellentesque felis eleifend. Suspendisse potenti.</p>
            <Gap height={20} />
            <Link title="Kembali Ke Home" onClick={() => history.push('/')} />
        </div>
    )
}

export default DetailBlog
