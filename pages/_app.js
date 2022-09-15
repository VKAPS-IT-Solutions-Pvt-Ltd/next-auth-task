import '../styles/globals.css'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  return (<>

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"></link>




    </Head>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin="anonymous"></script>


    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>

  </>)
}

export default MyApp




