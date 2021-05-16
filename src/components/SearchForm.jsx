import React, { useState, useContext } from 'react'
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
import { Box, Flex, Text } from '~components/base'
import { themeGet } from '~style'
import Pointer from '~components/Pointer'
import { Context } from '~context/Store'

const ModalContent = ({ emailAddress }) => {
  return (
    <Box>
      <Text as="h3" pb={[1]}>
        🥰 {emailAddress}{' '}
      </Text>
      <Text as="h4">Thanks for subscribing to our newsletter!</Text>
    </Box>
  )
}

const SearchForm = () => {
  const [, dispatch] = useContext(Context)
  const [formValues, setFormValues] = useState({ search: '' })
  console.log(
    '🚀 ~ file: SearchForm.jsx ~ line 32 ~ SearchForm ~ formValues',
    formValues
  )
  const updateFormValue = ({ key, val }) => {
    const newValues = {
      ...formValues,
    }
    newValues[key] = val
    setFormValues(newValues)
  }
  const [status, setStatus] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('wait')
    const doTimeout = () => {
      setTimeout(() => {
        // dispatch({
        //   type: 'MODAL_CONTENT',
        //   payload: <ModalContent emailAddress={formValues.email} />,
        // })
        // dispatch({ type: 'MODAL_STATUS', payload: true })
        // @todo:
        // do subscribe.
        updateFormValue({ key: 'search', val })
        setStatus('success')
      }, 300)
    }
    // do subscribe.
    doTimeout()
    return false
  }
  const handleChange = e => setFormValues({ [e.target.name]: e.target.value })

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
              value={formValues?.search}
              required
              onChange={handleChange}
              disabled={Boolean(status)}
            />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <Search />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>

      {status === 'success' && (
        <Box>
          <Text as="h4">🥰</Text>
          <Text as="h4">Thanks for subscribing!</Text>
        </Box>
      )}
    </>
  )
}

export default SearchForm
