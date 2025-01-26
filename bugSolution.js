```javascript
import {unstable_getServerSession} from "next-auth/next"
import {authOptions} from "\pages\api\auth/[...nextauth]";

export default function Home({props}) {
  console.log(props.session);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);
  return {
    props: {
      session
    }
  };
}
```