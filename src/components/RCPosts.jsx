import React from "react";
import { useQuery } from "react-query";
import Axios from "axios";

const fetchData = () => {
  return Axios.get("https://jsonplaceholder.typicode.com/posts");
};

const RCPosts = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "fetch-all-posts",
    fetchData,
    {
      //   cacheTime: 5000,
      //   staleTime: 30000,
      // refetchOnMount:false,
      // refetchOnWindowFocus:true
      // refetchInterval: 2000, //Pooling Conept which means data is refetching on reqular basics after every 2 Seconds
      // refetchIntervalInBackground: true,
      // enabled: false, //If we false the enabled then it means that the data is not fething automatically. we can enable it by (refetch) function which we have destructured above.
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading | isFetching) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <button onClick={refetch}>Fetch Data through Button</button>

      {data?.data.map((post) => {
        return <h5>{post.title}</h5>;
      })}
    </div>
  );
};

export default RCPosts;
