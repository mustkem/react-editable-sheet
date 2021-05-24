import { useState } from 'react'

import styles from '../Sheet.module.css';

function Cell(props: any) {
    const {
        item
    } = props;
    const [data, setData] = useState(item);
    const [isFocus, setIsFocus] = useState(false);

    const handleChange = (e: any) => {
        setData(e.target.innerHTML);
    }
    const handleFocus = () => {
        setIsFocus(true);

    }
    const handleBlur = () => {
        setIsFocus(false);
    }
    return (
        <div
            className={isFocus ? styles.cellFocused : ""}
            onInput={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            suppressContentEditableWarning={true}
            contentEditable
            dangerouslySetInnerHTML={{ __html: item }}>
        </div>
    )
}

export default Cell;
