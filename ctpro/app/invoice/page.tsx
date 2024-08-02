'use client';

import Header from '@/components/header';
import { usePosts } from '@/hooks/usePosts';
import { useListPost } from '@/services/posts';
import { useState } from 'react';

export default function Invoice() {
  //const [postCount, setPostCount] = useState(10)
  const { data, isPending, isFetching } = usePosts(20);
 // const { data, isPending, error } = useListPost()
  // if (isPending) return <div>Loading</div>

  const handleSubmitLogin = () => {};
  if (isPending) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="container pt-20">
        <section>
          <ul>
            {data?.map((post, index) => (
              <li key={post.id}>
                {index + 1}. {post.title}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
