import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";

const fetchData = () => {
  return Axios.get("https://jsonplaceholder.typicode.com/posts");
};

// const onSuccess = (data) => {
//   console.log("Produce side effects after data fetching", data);

// };

// const onError = (error) => {
//   console.log("Produce side effects after error encountering", error);
// };

const RCPosts = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "fetch-all-posts",
    fetchData,
    {
      // cacheTime: 4000, //By default every query result cached for 5 minutes but we can change it according to our requirements if we want. Here in this example i have changed the cacheTime from 5 minutes to 4 seconds. So, after 4 seconds teh data will automatically cleared freom the cache.
      //-----------------------------
      // staleTime: 30000,  //Stale Time means that if we don't want to update the data for a given amount of time even the data is updated by default the stale time is Zero (0).
      //---------------------------------
      // refetchOnMount: "always", //By default its value is true but we set the value to ('always') in a string then it means that even we set the stale time or not it will fetch the data on component mount.If we change the value to (false) then it will not fewtch the data on compoenent mount.
      //------------------------------------
      // refetchOnWindowFocus:false //Each time when we go to the page react query every time fetched the api so we will use (refetchOnWindowFocus:false) for terminating this behaviour
      //-------------------------------
      // refetchInterval: 2000, //Pooling Conept which means data is refetching on reqular basics after every 2 Seconds
      // refetchIntervalInBackground: true,

      //-----------------------------
      // enabled: false, //If we false the enabled then it means that the data is not fething automatically. we can enable it by (refetch) function which we have destructured above.
      // --------------------------/
      // onSuccess, //If you want to use the onSuccess and On Error Function seperately for putting some logic in it so we can use it that way.
      // onError,
      // ------------------------
      //We can also transform the data here if we want the method is given below
      // select: (data) => {
      //   const d = data.data.map((post) => post.title);
      //   return d;
      // },
    }
  );

  console.log({ isLoading, isFetching });
  console.log("==========", data);
  if (isLoading | isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <button onClick={refetch}>Fetch Data through Button</button>
      {/* 
      {data?.map((post) => {
        return <h5>{post}</h5>;
      })} */}
    </div>
  );
};

export default RCPosts;
