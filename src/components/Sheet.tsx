import { useState } from 'react';
import { Table } from 'reactstrap';

import Cell from './Cell'

import initialData from './data';

import styles from '../Sheet.module.css';


function Sheet() {
    const [data, setData] = useState<any>(initialData);
    return (
        <div className={styles.sheetContainer}>
            <Table>
                <thead>
                    <tr>
                        <th></th>
                        {Object.keys(data[0]).map(item => (<th>{item} </th>))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item: any, index: any) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    {
                                        Object.keys(item).map(key => {
                                            return (
                                                <td><Cell item={item[key]} /></td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Sheet
