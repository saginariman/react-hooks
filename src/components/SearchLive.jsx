import React, { useState } from 'react'
import useDebounce from '../hooks/useDebounce';

const SearchLive = () => {
    const [value, setValue] = useState('');
    const debouncedSearch = useDebounce(search, 500);
  
    function search(query) {
      fetch(`https://jsonplaceholder.typecode.com/todos?query=`+query)
        .then(response => response.json())
        .then(json => {
          console.log(json);
        })
    }
  
    const onChange = (e) => {
      setValue(e.target.value)
      debouncedSearch(e.target.value);
    }
  
    return (
        <input type="text" value={value} onChange={onChange}/>
    );
}

export default SearchLive