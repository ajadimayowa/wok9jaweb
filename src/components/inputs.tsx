import React, { useEffect, useState } from "react";
import { IServices } from "../interfaces/service";
import { IGig } from "../interfaces/gig";

interface ISearch {
    id:string,
    title:string,
    icon:string,
    path:string,
}
const results = [
    {title:'Iphone 12 Pro max',icon:'',id:'1',path:''},
    {title:'Iphone 12 Pro',icon:'',id:'2',path:''},
    {title:'Iphone 12',icon:'',id:'3',path:''},
    {title:'Iphone 11 Pro max',icon:'',id:'4',path:''},
    {title:'Iphone 11 Pro',icon:'',id:'5',path:''},
    {title:'Iphone 11',icon:'',id:'6',path:''},
    {title:'Iphone X',icon:'',id:'7',path:''},
]
const CustomInput: React.FC<any> = ({ type, searchData}) => {
    const [searchWord,setSearchWord] = useState<string>('');
    const [searchResult,setSearchResult] = useState<ISearch[]>([]);

    
    const handleSearch = ()=>{
        if(searchWord==''){
            setSearchResult([])
        } else {
            const searched = searchData.filter((res:IGig)=>(res.gigTitle.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())))
            setSearchResult(searched)
        }
    }
    
    
    useEffect(()=>{
        handleSearch()
    },[searchWord])

    if (type == 'text') {
        return (
            <div className="d-flex flex-row gap-2 bg-light border">

                <input />
                <i className="bi bi-x-circle-fill"></i>
            </div>
        )
    } else if (type == 'search') {
        return (
            <div className="d-flex flex-column gap-1" style={{position:'relative'}}>
            <form className="d-flex flex-row gap-2  bg-light align-items-center border rounded rounded-1 p-1">

                <input 
                placeholder="Search any item..."
                onChange={(e)=>setSearchWord(e.target.value)}
                className="d-flex border border-0 flex-row gap-2 bg-light p-2" style={{outline:'none',width:'85%'}}/>
                <div className="d-flex justify-content-around rounded gap-3 align-items-center">
                <i className="bi bi-x-circle-fill" role="button"></i>
                <i className="bi bi-search p-2 rounded text-dark px-3" role="button"></i>
                </div>
            </form>
            {
            searchWord.length>0&&
            <div className="bg-light p-1 text-dark w-100 rounded shadow-sm" style={{position:'absolute',top:55}}>
            <ul className="d-flex align-items-start gap-2 flex-column m-0 p-0">
                {
                    searchResult.length==0 &&
                    <li className="list-group-item w-100 p-2 fw-medium d-flex gap-2" role="button">
                               <p className="p-0 m-0 w-100 text-center">Not available</p>
                     </li>
                }
                    {
                        searchResult.map((link:any, index) => (
                            <li key={index} className="list-group-item w-100 border border-1 rounded p-2 fw-medium d-flex gap-2" role="button">
                                <i className={link.icon}></i>{link.gigTitle} <p className="p-0 m-0">{link.path}</p>
                            </li>
                        ))

                    }
                </ul>
            </div>}
            </div>
        )
    }
}
export default CustomInput 