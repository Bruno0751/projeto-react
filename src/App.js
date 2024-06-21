import React from 'react';
import './App.css';
import { PostCard } from './component/PostCard';

class App extends React.Component {
  state = {
    time: null,
    counter: 0,
    posts: []  
  }
  // LIFICLY METHODS
  componentDidMount() {
    this.loadPosts()
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    // clearTimeout(this.time)
  }
  //FUNTION
  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photostsResponse = fetch('https://jsonplaceholder.typicode.com/photos');
    const [ posts, photos  ] = await Promise.all([postsResponse, photostsResponse])
    const postsJson = await posts.json()
    const photosJson = await photos.json()
    const postAndPhotos = postsJson.map((post, index) =>  {
      return {
        ...post, cover: photosJson[index].url
      }
    })
    this.setState({ posts: postAndPhotos })
  }
  handleTime = () => {
    const { posts, counter } = this.state
    posts[0].title = 'o título mudou'
    this.time = setTimeout(() => {
      this.setState({ posts, counter: counter + 1 })
    }, 1000);
  }

  render() {
    const { posts } = this.state
    return (
      <section className="container">
        <div className="posts">
          {posts.map(post => (
            <PostCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </section>
    )
  }
}

export default App;
