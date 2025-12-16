import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar d-flex my-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter item..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        required
        autoFocus
      />
      <button type="submit" className="btn btn-outline-success">Search</button>
    </form>
  )
}
