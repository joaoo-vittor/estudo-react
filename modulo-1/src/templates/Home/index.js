import './style.css';
import { Component } from 'react';

import { Posts } from '../../components/posts'
import { get_load_posts } from '../../utils/get_load_post'
import { Button } from "../../components/button";
import { TextInput } from '../../components/text_input'

export class Home extends Component {
  state = {
    posts: [],
    allposts: [],
    page: 0,
    postPerPage: 10,
    searchValue: ''
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

  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  loadMorePosts = () => {
    const { allposts, page, posts, postPerPage } = this.state
    const nextPage = page + postPerPage
    const nextPosts = allposts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts)

    this.setState({ posts: posts, page: nextPosts })
  }

  render() {
    const { posts, page, postPerPage, allposts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allposts.length

    const filteredPosts = !!searchValue ? allposts.filter((post) => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    }) : posts

    return (
      <section className='container'>
        <div className='search-conteiner'>
          {!!searchValue && (
            <>
              <h1>Search Value: {searchValue}</h1>
            </>
          )}

          <TextInput 
            searchValue={searchValue} 
            handleChange={this.handleChange}
          />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        
        {filteredPosts.length === 0 && (
          <p>Não Existem Posts =(</p>
        )}

        <div className="button-container">
          {!searchValue && (
            <Button 
            text='load more posts'
            onClick={this.loadMorePosts}
            disabled={noMorePosts}
            />
          )}
        </div>
      </section>
    );

  }
}
