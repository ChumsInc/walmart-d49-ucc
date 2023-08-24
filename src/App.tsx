import React, {useEffect, useId, useState} from 'react';
import {stores} from './stores'

export interface StoreList {
    [key:string]: string;
}
export default function App() {
    const [list, setList] = useState<StoreList>({})
    const [storeNo, setStoreNo] = useState('');
    const id = useId();

    useEffect(() => {
        setList(stores as StoreList)
    }, []);

    return (
        <div className="mt-3">
            <div className="row g-3 align-items-baseline mb-5">
                <div className="col-auto">
                    <h3><label htmlFor={id}>Filter by Store No</label></h3>
                </div>
                <div className="col-auto">
                    <input id={id} type="search" className="form-control form-control-lg" autoComplete="off"
                           value={storeNo} onChange={(ev) => setStoreNo(ev.target.value)} />
                </div>
            </div>
            <div>
                {Object.keys(list).sort().filter(key => key.includes(storeNo)).map(key => (
                    <a key={key} href={`./public/pdf/${list[key]}`} className="btn btn-lg btn-outline-primary m-3" title={`Store ${key} UCC Label`}>Store {key}</a>
                ))}
            </div>
        </div>
    )
}
