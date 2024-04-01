import React, { FC, useState, useRef, useContext } from "react";
import { useAuth } from "./AuthContext";

interface IData {
    name: string
    phone: string
    postCode: number
}

const AppTs: FC = () => {

    const {isAuth} = useAuth()

    //const [data, setData] = useState<IData>({} as IData) 

    // const inputRef = useRef<HTMLInputElement>(null)
    // console.log(inputRef.current?.value)

    return (
        <div style={{marginTop: 100}}>TypeScript Version {isAuth && 'Autorization'}</div>
    )
}

export default AppTs;