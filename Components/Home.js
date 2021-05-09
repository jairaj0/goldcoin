import React from 'react'
import Content from './Content'
import MenuProvider from './Menu'
import Nav from './Nav'


function Home() {
    return (
        <div>
        <MenuProvider>
            <Nav />
            <Content />
        </MenuProvider>
        </div>
    )
}

export default Home
