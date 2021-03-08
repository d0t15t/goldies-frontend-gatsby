import React, { useState, useContext } from 'react'
import { Button, Form, FormGroup, Input, Spinner } from 'reactstrap'
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

const NewsletterForm = () => {
  const [, dispatch] = useContext(Context)
  const [formValues, setFormValues] = useState({ email: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()
    setStatus('wait')
    const doTimeout = () => {
      setTimeout(() => {
        dispatch({
          type: 'MODAL_CONTENT',
          payload: <ModalContent emailAddress={formValues.email} />,
        })
        dispatch({ type: 'MODAL_STATUS', payload: true })
        // @todo:
        // do subscribe.
        setStatus('success')
      }, 300)
    }
    // do subscribe.
    doTimeout()
    return false
  }
  const handleChange = e => setFormValues({ [e.target.name]: e.target.value })

  return (
    <Box m={['0 auto']}>
      <Flex
        className="newsletter-block"
        flexDirection={['column']}
        p={[1]}
        css={`
          > * {
            padding: ${themeGet('space.unit.margin')};
          }
          * {
            color: ${themeGet('colorSchemes.default.grey')};
            text-align: center;
          }
        `}
      >
        <Box
          fontSize="2em"
          textAlign="center"
          className="pointer-wrapper"
          pb={['0 !important']}
          // mb={['10px']}
          width={[1]}
        >
          <Pointer />
        </Box>

        <Box
          textAlign={['center', 'right']}
          className="text-wrapper"
          width={[1, 2 / 3]}
          m={['auto']}
          pb={['0 !important']}
        >
          <Text
            as="h4"
            css={`
              font-style: italic;
            `}
          >
            Sign up to{' '}
            <strong
              css={`
                display: block;
              `}
            >
              Goldie's Newsletter
            </strong>{' '}
            for exclusive discounts, spells, and playlists ;)
          </Text>
        </Box>
        <Box
          width={['300px']}
          m={['auto']}
          css={`
            form {
              margin-bottom: 0;
              input {
                text-align: center;
                margin-bottom: ${themeGet('space.unit.margin')};
              }
              button {
                margin: auto;
              }
            }
          `}
        >
          {status !== 'success' && (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={handleChange}
                  disabled={Boolean(status)}
                />
              </FormGroup>

              <Button
                variant="primary"
                type="submit"
                disabled={Boolean(status)}
              >
                {!status && 'Submit'}{' '}
                {status === 'wait' && <Spinner color="warning" />}{' '}
              </Button>
            </Form>
          )}
          {status === 'success' && (
            <Box>
              <Text as="h4">🥰</Text>
              <Text as="h4">Thanks for subscribing!</Text>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  )
}

export default NewsletterForm
