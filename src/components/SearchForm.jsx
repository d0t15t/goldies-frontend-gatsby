import React, { useEffect, useState, useContext } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Spinner,
} from 'reactstrap'
import Search from '@material-ui/icons/Search'
import Highlighter from 'react-highlight-words'
import { Index } from 'elasticlunr'
import { useStaticQuery, graphql } from 'gatsby'
import { Box, Flex, Text } from '~components/base'
import { themeGet } from '~style'
import Pointer from '~components/Pointer'
import { Context } from '~context/Store'

const SearchForm = ({ onChange }) => {
  const { siteSearchIndex } = useStaticQuery(
    graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `
  )
  const index = Index.load(siteSearchIndex.index)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const searchInput = React.useRef()

  const searchResults = searchQuery => {
    const res = index.search(searchQuery, { expand: true }).map(({ ref }) => {
      return index.documentStore.getDoc(ref)
    })
    setResults(res)
    onChange(res)
  }

  useEffect(() => {
    // searchResults('blog')
    searchInput.current.focus()
  }, [])

  // const [status, setStatus] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    return false
  }

  const handleChange = e => {
    const searchQuery = e.target.value
    setQuery(searchQuery)
    searchResults(searchQuery)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <InputGroup>
            <Input
              name="search"
              id="search"
              type="search"
              placeholder="Enter your search"
              value={query}
              required
              onChange={handleChange}
              autoFocus
              // disabled={Boolean(status)}
              ref={searchInput}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <Search />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    </>
  )
}

export default SearchForm
