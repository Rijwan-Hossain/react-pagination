import React from 'react'

function AppPosts(props) { 
    let {data: posts} = props;
    console.table(posts);
    
    return ( 
        <div> 
        {
            posts.map((post, i) => {
                return (
                    <div key={i} style={{ padding: '10px', margin: '10px 100px', border: '1px solid grey' }}> 
                        <h5>{`User ${post.id}`}</h5> 
                        <p>{`Title: ${post.title}`}</p>
                        <p>{`Body: ${post.body}`}</p>
                    </div>
                )
            })
        }
        </div> 
    ) 
} 

export default AppPosts
