export const PostCard = (props) => {
    const { post } = props
    return(
        <div className="post">
            <img src={post.cover} alt={post.title} />
            <div key={post.id} className="post-content">
                <h1>{post.title}</h1>
                <h2>{post.body}</h2>
            </div>
        </div>
    )
}