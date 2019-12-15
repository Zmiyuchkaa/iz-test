import React from 'react'


const Posts = ({posts, loading}) => {
  if (loading) {
    return <h2>Loading....</h2>
  }
  return (
    <div>
      <div>{posts.map(post => (
        <table class='table_dark'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Funds</th>
          <th>City</th>
          <th>Phone</th>
        </tr>
        <tr>
          <td key={post.id}>{post.name}</td>
          <td key={post.id}>{post.email}</td>
          <td key={post.id}>{post.funds}</td>
          <td key={post.id}>{post.city}</td>
          <td key={post.id}>{post.phone}</td>
        </tr>
      </table>
      ))}
      </div>
    </div>
  )}
  
export default Posts;