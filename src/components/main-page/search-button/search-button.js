import React from 'react'
import styles from './styles.module.css'
import { Button } from '@chakra-ui/core'


function SearchButton({text, onClick}) {
    return(
        <Button class={styles.button}>
        {text}
        </Button>
       
    )

}

export default SearchButton