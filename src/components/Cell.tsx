import { useState } from 'react'

import styles from '../Sheet.module.css';

function Cell(props: any) {
    const {
        item,
        index,
        dataKey,
        handleChange
    } = props;
    const [data, setData] = useState(item);
    const [isFocus, setIsFocus] = useState(false);

    const handleInputChange = (e: any) => {
        setData(e.target.innerHTML);
    }
    
    const handleFocus = () => {
        setIsFocus(true);

    }
    const handleBlur = () => {
        setIsFocus(false);
        handleChange(index, dataKey, data)
    }
    return (
        <div
            className={isFocus ? styles.cellFocused : ""}
            onInput={handleInputChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            suppressContentEditableWarning={true}
            contentEditable
            dangerouslySetInnerHTML={{ __html: item }}>
        </div>
    )
}

export default Cell;
