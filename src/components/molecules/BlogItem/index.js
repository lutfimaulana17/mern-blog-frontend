import React from 'react'
import './blogItem.scss'
import { RegisterBg } from '../../../assets'

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="post" />
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author - Date post</p>
                <p className="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quam sapien, congue nec turpis a, imperdiet dapibus diam. Morbi fringilla aliquam laoreet. Vestibulum non lacus at neque lacinia egestas. Duis finibus porttitor lacus, et dapibus eros commodo lacinia. Aliquam id enim in velit pellentesque luctus commodo at ex. Vestibulum fermentum auctor mauris eu lacinia. Nulla luctus eget sem eget lacinia. Vivamus mi nisi, pretium non nisl quis, placerat vulputate leo. Sed libero turpis, euismod ac aliquam id, imperdiet at quam. Pellentesque est sapien, vestibulum in urna vitae, ullamcorper sollicitudin massa. Ut tincidunt nisl et turpis eleifend, vitae auctor nulla accumsan. Duis mollis rutrum metus. Curabitur fringilla tellus eu ex venenatis, ac pellentesque felis eleifend. Suspendisse potenti.</p>
            </div>
        </div>
    )
}

export default BlogItem
