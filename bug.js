```javascript
import {unstable_getServerSession} from "next-auth/next"
import {authOptions} from "\pages\api\auth/[...nextauth]";

export default async function Home({props}) {
  const session = await unstable_getServerSession(req,res,authOptions);
  console.log(session);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
```