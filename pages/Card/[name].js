import {useRouter} from 'next/router'
import Head from 'next/head'
import React from 'react'
export default function Card(props) {
    const router = useRouter()
    
    const description = 'это моя компания'
    const urimg = 'https://sun9-53.userapi.com/impg/kr5c5dvuzJiaM4KDx8qTWwMvUZNpITCPBXtqjQ/cCJiPO-iEpE.jpg?size=810x1080&quality=96&sign=ab822bd6b239ec5012f4bf860d8c21c4&type=album'
    return (<>
        {router.query.name!=''&&<Head>
            <title>{router.query.name}</title>
            <meta name="keywords" content='apknavigator' />
            <meta name="description" content={description}/> 
            <meta name="robots" content="index, follow"></meta>
            <meta property="og:title" content={router.query.name}/>
            <meta property="og:image" content={urimg}/>
            <meta property="og:description" content={description}/>
        </Head>}
        <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={urimg} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{router.query.name}</h5>
            <p className="card-text">{description}</p>
        </div>
        </div>
   </>)
}