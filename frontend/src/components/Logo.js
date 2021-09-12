import { StylesContext } from '@material-ui/styles'
import React from 'react'
import {useStyles} from '../styles'

function Logo() {
    const styles=useStyles(); 
    return (
       <img src='/images/logo.png' alt='food order'
       className={styles.largeLogo}></img>
    )
}

export default Logo
