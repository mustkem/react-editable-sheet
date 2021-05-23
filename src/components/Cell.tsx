import { useState } from 'react'

import styles from '../Sheet.module.css';

function Cell(props: any) {
    const {
        item
    } = props;
    const [data, setData] = useState(item)
    return (
        <div className={styles.editableCell} contentEditable>
            {data}
        </div>
    )
}

export default Cell
