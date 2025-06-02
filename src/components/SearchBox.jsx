import {useState, useEffect} from 'react'

function SearchBox(props) {
  const {searchText, setSearchText} = props
  const [input, setInput] = useState('')

  useEffect( ()=> {
    let t1 = setTimeout(()=>{
      setSearchText(input)
    }, 1000)
    return ()=> {
      clearTimeout(t1)
    }
  },[input] )
  
  return (
    <label className="input w-[16pc] me-5">
      <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input type="search" required placeholder="Search" 
        value={input}
        onChange={e=>setInput(e.target.value)}
      />
    </label>
  )
}

export default SearchBox
