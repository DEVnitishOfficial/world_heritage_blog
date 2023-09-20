function getQueryParameter(title,content,description,poster) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(title,content,description,poster);
}
// setting content dynamically in the blog page 
// left portion
 const header_left = document.getElementById("H_left")

 const H_title = document.createElement("h1")
 H_title.id = "blog-title"

 const H_summary = document.createElement("p")
 H_summary.id = "blog-summary"

 header_left.appendChild(H_title)
 header_left.appendChild(H_summary)


// right portion
 const header_right = document.getElementById("H_right")

 const H_image = document.createElement("img")
 H_image.id = "blog-image"

 header_right.appendChild(H_image)

 // content part
 const blog_content = document.getElementById("blog-content")

 const content_para = document.createElement("p")
 content_para.id = "blog-content"

 blog_content.appendChild(content_para)

 // coming back to the home page 
 const backButton = document.getElementById("back");
 backButton.addEventListener("click", () => {
    window.location.href = "index.html"; 
});

// Retrieve the index query parameter from the URL
const index = getQueryParameter("index");

// Retrieve existing blog posts from LocalStorage
const existingBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

if (index !== null && !isNaN(index) && index >= 0 && index < existingBlogPosts.length) {
    // Display the content of the selected blog post
    const selectedPost = existingBlogPosts[index];
    
    document.getElementById("blog-title").textContent = selectedPost.title;
    document.getElementById("blog-summary").textContent = selectedPost.description;
    document.getElementById("blog-image").src = selectedPost.poster;
    document.getElementById("blog-content").textContent = selectedPost.content;
} else {
    // Handle invalid or missing index parameter
    document.getElementById("blog-content").textContent = "Blog post not found.";
}
