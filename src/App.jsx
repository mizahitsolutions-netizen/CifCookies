// import { useEffect, useState } from "react";
// import ComingSoon from "./components/ComingSoon";
// import Loader from "./components/Loader";


// export default function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1800000);
//     return () => clearTimeout(timer);
//   }, []);

//   return loading ? <Loader /> : <ComingSoon />;
// }
import ComingSoon from './components/ComingSoon'

export default function App() {
  return <ComingSoon />
}