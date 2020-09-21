import React from 'react'
import styles from './styles.module.css'

function PageHeader({header}) {
    return (
        <h1 className={styles.pageHeader}>
            {header}
        </h1>
    )
}

export default PageHeader