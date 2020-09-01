import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  return currentUser ? <h1>You are signed in</h1> : <h1>You are NOT signed in</h1>;
};

export async function getInitialProps(req) {
  const response = await axios.get('http://ticketing.dev/api/users/currentuser', {
    headers: req.headers,
  });
  return {
    props: {
      current_user: response.data,
    },
  };
}
export default LandingPage;
