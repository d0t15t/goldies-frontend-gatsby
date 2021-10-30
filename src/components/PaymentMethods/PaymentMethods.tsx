import React, { FC, ReactNode } from 'react';
import * as S from './PaymentMethods.styled';

interface PaymentMethodsProps {
  children: ReactNode;
}

export const PaymentMethods: FC<PaymentMethodsProps> = ({ children }) => {
  const items = [
    {
      Amex: 'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg',
    },
    {
      'Apple Pay':
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/apple_pay-f6db0077dc7c325b436ecbdcf254239100b35b70b1663bc7523d7c424901fa09.svg',
    },
    {
      'Diners Club':
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg',
    },
    {
      Discover:
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg',
    },
    {
      Elo: 'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/elo-bae665edd62be838e1d8ce585b4fbaa26bc3ab0acccbda0b00864d7298895d87.svg',
    },
    {
      'Facebook Pay':
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/facebook_pay-6dd2d5299387dd7ee76f136125a3dee928b3343af710c36b074192dd5ffe50b1.svg',
    },
    {
      JCB: 'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/jcb-ab0f5a1739704f1ab039f19ac8c28895af5c39a3f54ee9b748ea051986b0bd36.svg',
    },
    {
      Klarna:
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/klarna-389801c6056cb5600b4f05f72ebc2c58e4947688c6c4f5e6ccea41f7973d3a28.svg',
    },
    {
      Mastercard:
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg',
    },
    {
      Paypal:
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg',
    },
    {
      Venmo:
        'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/venmo-e46496b4036966108664ea6a65bfeddd373275087df5f94cc3e5564fdb493eb0.svg',
    },
    {
      Visa: 'https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg',
    },
  ];
  return (
    <S.Container>
      {items.map((item, i) =>
        Object.keys(item).map((key) => <img src={items[i][key]} alt={key} key={key} />)
      )}
    </S.Container>
  );
};

export default PaymentMethods;
