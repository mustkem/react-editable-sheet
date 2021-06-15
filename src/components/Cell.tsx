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
    const [timeOutId, setTimeoutId] = useState<any>(setTimeout(() => { }));


    const handleInputChange = (e: any) => {

        setData(e.target.innerHTML);

        clearTimeout(timeOutId);
        setTimeoutId(setTimeout(() => {
            //save data 1000 second after user has stopped typing 
            handleChange(index, dataKey, data)
        }, 1000));
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
            className={`${isFocus ? styles.cellFocused : ""} cell-content`}
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
