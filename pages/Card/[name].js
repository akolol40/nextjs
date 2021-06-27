import {useRouter} from 'next/router'
import Head from 'next/head'
import React from 'react'
export default function Card(props) {
    const router = useRouter()
    console.log(props)
    const urimg = 'https://pbs.twimg.com/media/E2GqwPhWUAAwxqT?format=jpg&name=small'
    return (<>
       <Head>
            <title>{props.name.name}</title>

            <meta name="keywords" content='apknavigator' />
            <meta name="description" content={props.description}/> 
            <meta name="robots" content="index, follow"></meta>
            <meta property="og:site_name" content="APKNAV" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content={props.name.name}/>
            <meta property="og:image" content={urimg}/>
            <meta property="og:description" content={props.description}/>
        </Head>
        <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src={urimg} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{props.name.name}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        </div>
   </>)
}

Card.getInitialProps = async ({query , res}) => {
    return {name: query, description: 'I just finished the first @masseffect. I love game and can’t wait to jump into Mass Effect 2. Thank you @bioware @CaseyDHudson @DrewKarpyshyn and so many others for making this game. ❤️#platinumtrophy'}
}


