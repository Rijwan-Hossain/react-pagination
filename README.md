# react-pagination
Output: 
https://competent-noether-dc3d09.netlify.com/


# used librarys
Axios --> for async api call for data
react-js-pagination --> npm package for easy pagination configure 

# important logic
let indexOfLastData = currentPage * dataPerPage 
let indexOfFirstData = indexOfLastData - dataPerPage 
let data = posts.slice(indexOfFirstData, indexOfLastData) 

pagination depends upon these 3 lines of logic. 

To understand the logic with explanation, 
checkout this video...
https://www.youtube.com/watch?v=IYCa1F-OWmk 

