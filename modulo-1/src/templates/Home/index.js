import './style.css';
import { Component } from 'react';

import { Posts } from '../../components/posts'
import { get_load_posts } from '../../utils/get_load_post'
import { Button } from "../../components/button";

export class Home extends Component {
  state = {
    posts: [],
    allposts: [],
    page: 0,
    postPerPage: 48
  }

  async componentDidMount() {
    await this.loadPosts()
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state

    const postsAndPhotos = await get_load_posts()
    this.setState({ posts: postsAndPhotos.slice(page, postPerPage),
                    allposts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const { allposts, page, posts, postPerPage } = this.state
    const nextPage = page + postPerPage
    const nextPosts = allposts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts)

    this.setState({ posts: posts, page: nextPosts })
  }

  render() {
    const { posts, page, postPerPage, allposts } = this.state;
    const noMorePosts = page + postPerPage >= allposts.length

    return (
      <section className='container'>
        <Posts posts={posts} />

        <div className="button-container">
          <Button 
            text='load more posts'
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>
      </section>
    );

  }
}
