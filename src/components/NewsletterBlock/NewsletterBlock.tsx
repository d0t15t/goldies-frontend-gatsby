import React, { FC, ReactNode, useState } from 'react';
import { Button } from '~components';
import * as S from './NewsletterBlock.styled';

interface NewsLetterBlockProps {
  children: ReactNode;
}

export const NewsletterBlock = () => {
  const [formValues, setFormValues] = useState({ email: '' });
  const handleChange = () => setFormValues({ ...formValues, email: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do subscribe.
  };

  const isDisabled = () => formValues.email.length === 0;

  const newsletterId = 'newsletter-subscription-form';
  const email = 'email';
  return (
    <form id={newsletterId} onSubmit={handleSubmit}>
      <label htmlFor={email}>Subscribe to our newsletter</label>
      <input
        id={email}
        name={email}
        type={email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <Button type="submit" disabled={isDisabled()}>
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterBlock;
