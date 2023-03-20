import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './post/postSlice';

const PostView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPost());
    }, [dispatch])
    const { isLoading, posts, error } = useSelector((state) => state)
    console.log(posts);
    return (
        <div>
            {isLoading && <h2 className='text-6xl'>loading</h2>}
            {error && <h2 className='text-6xl'>{error}</h2>}
            {posts &&
                posts.map((post) => {
                    return (
                        <article>
                            <h2 className="text-4xl">{post.title}</h2>
                            <h2 className="text-2xl">{post.body}</h2>
                        </article>
                    )
                })}
        </div>
    );
};

export default PostView;