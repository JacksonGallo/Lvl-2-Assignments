import React from "react"
import BlogPost from "./BlogPost"
import data from "./data"

export default function BlogList () {

    const blogPosts = data.map(item => {
        return (

            <BlogPost 
            key={item.title}
            item={item}
            />
            
        )
    }
    )

    return (

        <div className="BlogList--container">
            
            {blogPosts}
            <button className="BlogList--button">OLDER POSTS</button>

        </div>
        
    )
}