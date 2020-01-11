import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import Pagination from "react-js-pagination"; 
import AppPosts from './AppPosts';
import './pagination.css'


function App() { 
  let [posts, setPosts] = useState([]) 

  useEffect(() => { 
    Axios.get('https://jsonplaceholder.typicode.com/posts') 
      .then(res => { setPosts(res.data) }) 
      .catch(err => console.log('Server Error')) 
  }, []) 

    let [currentPage, setCurrentPage] = useState(1) 
    let [dataPerPage, setDataPerPage] = useState(5) 

    let indexOfLastData = currentPage * dataPerPage 
    let indexOfFirstData = indexOfLastData - dataPerPage 
    let data = posts.slice(indexOfFirstData, indexOfLastData) 

    const handlePageChange = (pageNumber) => { 
        setCurrentPage(pageNumber); 
    } 


  return ( 
    <div className="App"> 
      <div style={{height: '85vh', overflowY: 'scroll'}}> 
        <AppPosts data={data}/> 
      </div> 

      <Pagination 
        itemClass="page-item" 
        linkClass="page-link" 
        activePage={currentPage} 
        itemsCountPerPage={dataPerPage} 
        totalItemsCount={posts.length} 
        pageRangeDisplayed={5} 
        onChange={handlePageChange} 
        firstPageText="&laquo;" 
        prevPageText="&lsaquo;" 
        lastPageText="&raquo;" 
        nextPageText="&rsaquo;" 
        innerClass="pagination custom" 
      /> 
    </div>
  );
}

export default App;
