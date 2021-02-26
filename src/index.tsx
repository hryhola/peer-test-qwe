import * as React from 'react'
import styles from './styles.module.css'
import * as q from '@0x/subproviders'
import * as w from 'redux-subscribe-action'
import * as e from 'trezor-connect'
// @ts-ignore
import * as r from 'util.promisify'
import * as t from 'walletlink'
// @ts-ignore
import * as y from 'web3-provider-engine'
console.log(q, w, e, r, t, y)

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
