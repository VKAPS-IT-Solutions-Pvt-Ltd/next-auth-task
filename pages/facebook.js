import GoogleProvider from "next-auth/providers/google"
const facebook = () => {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
      ]
      
    return 
    (
        <h1 className="text-danger">facebook</h1>
    )
}

export default facebook