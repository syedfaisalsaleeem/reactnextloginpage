import Head from 'next/head'
import Login from "./Login";
import React from 'react';

class Home extends React.Component {
render(){  
  return (
    <div className="container">
      <Head>
        <title>DashBoard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      
        
        <p>Password Validated</p>
        
        
        

      </main>

      <footer>
        
      </footer>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
      }
}
export default Home;
