import React, { FC, ReactNode, useState } from 'react';
import { Box, FormControl, TextField, Typography } from '@mui/material';
import { Button } from '~components';
import * as S from './NewsletterBlock.styled';

interface NewsLetterBlockProps {
  children: ReactNode;
}

export const NewsletterBlock = () => {
  const [formValues, setFormValues] = useState({ email: '' });
  const handleChange = (e) => setFormValues({ ...formValues, email: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do subscribe.
    console.log('🚀 ~ file: NewsletterBlock.tsx ~ line 17 ~ handleSubmit ~ e', e);
  };

  const isDisabled = () => formValues.email.length === 0;

  const newsletterId = 'newsletter-subscription-form';
  const email = 'email';
  return (
    <S.Container className="newsletter-wrapper">
      <Typography variant="h5">~ Subscribe to our newsletter ~</Typography>
      <Typography variant="h6">for exclusive sales and deals!</Typography>
      <form id={newsletterId} onSubmit={handleSubmit}>
        <TextField
          type="email"
          id="filled-basic"
          label="Enter your email"
          variant="outlined"
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" disabled={isDisabled()}>
          Subscribe
        </Button>
      </form>
    </S.Container>
  );
};

export default NewsletterBlock;
