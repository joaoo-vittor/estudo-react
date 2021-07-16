import './style.css';
import { useEffect, useState, useCallback } from 'react';

import { Posts } from '../../components/posts'
import { get_load_posts } from '../../utils/get_load_post'
import { Button } from "../../components/button";
import { TextInput } from '../../components/text_input'

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [allposts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')

  const noMorePosts = page + postPerPage >= allposts.length

  const filteredPosts = !!searchValue ? allposts.filter((post) => {
    return post.title.toLowerCase().includes(
      searchValue.toLowerCase()
    )
  }) : posts

  
  const loadPosts = useCallback(async (page, postPerPage) => {
    const postsAndPhotos = await get_load_posts()
    
    setPosts(postsAndPhotos.slice(page, postPerPage))
    setAllPosts(postsAndPhotos)
  }, [])
  
  useEffect(() => {
    loadPosts(0, postPerPage)
  }, [loadPosts, postPerPage])

  const handleChange = (e) => {
    const { value } = e.target
    setSearchValue(value)
  }

  const loadMorePosts = () => {
    const nextPage = page + postPerPage
    const nextPosts = allposts.slice(nextPage, nextPage + postPerPage)
    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  }

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
            handleChange={handleChange}
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
            onClick={loadMorePosts}
            disabled={noMorePosts}
            />
          )}
        </div>
      </section>
  )
}


// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allposts: [],
//     page: 0,
//     postPerPage: 10,
//     searchValue: ''
//   }

//   async componentDidMount() {
//     await this.loadPosts()
//   }

//   loadPosts = async () => {
//     const { page, postPerPage } = this.state

//     const postsAndPhotos = await get_load_posts()
//     this.setState({ posts: postsAndPhotos.slice(page, postPerPage),
//                     allposts: postsAndPhotos
//     })
//   }

//   handleChange = (e) => {
//     const { value } = e.target
//     this.setState({ searchValue: value })
//   }

//   loadMorePosts = () => {
//     const { allposts, page, posts, postPerPage } = this.state
//     const nextPage = page + postPerPage
//     const nextPosts = allposts.slice(nextPage, nextPage + postPerPage)
//     posts.push(...nextPosts)

//     this.setState({ posts: posts, page: nextPosts })
//   }

//   render() {
//     const { posts, page, postPerPage, allposts, searchValue } = this.state;
//     const noMorePosts = page + postPerPage >= allposts.length

//     const filteredPosts = !!searchValue ? allposts.filter((post) => {
//       return post.title.toLowerCase().includes(
//         searchValue.toLowerCase()
//       )
//     }) : posts

//     return (
//       <section className='container'>
//         <div className='search-conteiner'>
//           {!!searchValue && (
//             <>
//               <h1>Search Value: {searchValue}</h1>
//             </>
//           )}

//           <TextInput 
//             searchValue={searchValue} 
//             handleChange={this.handleChange}
//           />
//         </div>

//         {filteredPosts.length > 0 && (
//           <Posts posts={filteredPosts} />
//         )}
        
//         {filteredPosts.length === 0 && (
//           <p>Não Existem Posts =(</p>
//         )}

//         <div className="button-container">
//           {!searchValue && (
//             <Button 
//             text='load more posts'
//             onClick={this.loadMorePosts}
//             disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

/*

import { Component } from 'react'

import './style.css';


export class Home extends Component {
  state = {
    counter: 0
  }

  handleClick = () =>{    
    this.setState((prevState, prevProps) => {
      console.log(prevProps)
      console.log(prevState)
      return { counter: prevState.counter + 1 }
    }, 
    () => {
      console.log(this.state.counter)
    })
  }

  render() {
    return (
      <div className='container'>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Incrementar</button>
      </div>
    )
  }
}

*/

