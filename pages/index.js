// const Index = () => (
//     <div>
//       <p>Hello Next.js</p>
//     </div>
//   )
  
//   export default Index

//========================================================================


//   // This is the Link API
// import Link from 'next/link'

// const Index = () => (
//   <div>
//     <Link href="/about">
//       <a>About Page</a>
//     </Link>
//     <p>Hello Next.js</p>
//   </div>
// )

// export default Index

//========================================================================

// import Header from '../components/header'

// export default () => (
//   <div>
//     <Header />
//     <p>Hello Next.js</p>
//   </div>
// )


//========================================================================

// import Layout from '../components/layout.js'

// import Link from 'next/link'

// const PostLink = (props) => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink title="Hello Next.js"/>
//       <PostLink title="Learn Next.js is awesome"/>
//       <PostLink title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )

//========================================================================


// import Layout from '../components/layout.js'

// import Link from 'next/link'

// const PostLink = (props) => (
//   <li>
//     <Link as={`/p/${props.id}`} 
//       href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// export default () => (
//   <Layout>
//     <h1>My Blog</h1>
//     <ul>
//       <PostLink id="hello-nextjs" 
//         title="Hello Next.js"/>
//       <PostLink id="learn-nextjs" 
//         title="Learn Next.js is awesome"/>
//       <PostLink id="deploy-nextjs" 
//         title="Deploy apps with Zeit"/>
//     </ul>
//   </Layout>
// )



//========================================================================



// import Layout from '../components/layout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'

// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} 
//             href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(res)
//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

// export default Index



//========================================================================



import Layout from '../components/layout.js'

import Link from 'next/link'

function getPosts () {
  return [
    { 
      id: 'hello-nextjs', 
      title: 'Hello Next.js'
    },
    { 
      id: 'learn-nextjs', 
      title: 'Learn Next.js is awesome'
    },
    { 
      id: 'deploy-nextjs', 
      title: 'Deploy apps with ZEIT'
    }
  ]
}

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} 
            href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx global>{`
      h1, a {
        font-family: "Arial";
      }
      ul {
        padding: 0;
      }
      li {
        list-style: none;
        margin: 5px 0;
      }
      a {
        text-decoration: none;
        color: blue;
      }
      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
)