import React from 'react'
import styled from '@style'

const type = 'radio'

const Radio = ({ id, name, value, label, register, onChange }) => {
  return (
    <>
      <Styled>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          ref={register}
          defaultChecked={id === value}
          onChange={onChange ? () => onChange(value) : null}
        />
        {label ? <label htmlFor={id}>{label}</label> : null}
      </Styled>
    </>
  )
}

export default Radio

const Styled = styled.div`
  display: inline-block;
  > input {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
  }
  > input + label {
    position: relative; /* permet de positionner les pseudo-éléments */
    padding-left: 25px; /* fait un peu d'espace pour notre case à venir */
    cursor: pointer; /* affiche un curseur adapté */
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 1px;
      width: 17px;
      height: 17px; /* dim. de la case */
      border: 1px solid #aaa;
      background: #f8f8f8;
      border-radius: 50%
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3); /* légère ombre interne */
      
    }

    &:after {
      content: '';
      border-radius: 50%
      background: green;
      position: absolute;
      top: 5.05px;
      left: 3.9px;
      width: 9.8px;
      height: 9.8px;
      font-size: 16px;
      transition: all 0.2s; /* on prévoit une animation */
    }
  }
  > input:not(:checked) + label {
    &:after {
      opacity: 0; /* coche invisible */
      transform: scale(0); /* mise à l'échelle à 0 */
    }
  }
  > input:disabled:not(:checked) + label {
    &:before {
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1; /* coche opaque */
      transform: scale(1); /* mise à l'échelle 1:1 */
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`
