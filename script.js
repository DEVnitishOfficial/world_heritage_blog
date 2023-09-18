
// Function to display existing blog posts on the home page
function displayBlogPosts() {
    const homePage = document.getElementById("home-page");

    // Clear any existing content
    homePage.innerHTML = "";

     // Retrieve existing blog posts from LocalStorage (if any)
     const existingBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
     
    for (const post of existingBlogPosts) {
        const blogPost = document.createElement("div"); // parent div
        blogPost.classList.add("blog-cards");

        const blogCard = document.createElement("div") // child div
        blogCard.classList.add("blog-card")
        blogPost.appendChild(blogCard)

        const imgElement = document.createElement("img")
        imgElement.src = post.poster

        const title = document.createElement("h2");
        title.textContent = post.title;

        const summary = document.createElement("p");
        summary.textContent = post.description;
        
        const Button = document.createElement("button")
        Button.textContent = "read more"

        blogCard.appendChild(title);
        blogCard.appendChild(summary);
        blogCard.appendChild(imgElement);
        blogCard.appendChild(Button)

        // Add a click event listener to view the full blog post 
        Button.addEventListener("click", () => viewBlogPost(post));

        homePage.appendChild(blogPost);
    }
}

// Call the function to initially display blog posts
displayBlogPosts();



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function viewBlogPost(post) {
    const blogPage = document.getElementById("blog-page");

    // Clear any existing content
    blogPage.innerHTML = "";

    // Create elements to display the full content
    const title = document.createElement("h2");
    title.textContent = post.title;

    const content = document.createElement("p");
    content.textContent = post.content;

    blogPage.appendChild(title);
    blogPage.appendChild(content);
}

// Function to go back to the home page
function goBackToHomePage() {
    // Re-display existing blog posts on the home page
    displayBlogPosts();
}

// Call the function to initially display blog posts on the home page (from Step 3)
displayBlogPosts();


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function openModal() {
    const modal = document.getElementById("add-blog-modal");
    modal.style.display = "block";
}

// Function to close the add blog modal
function closeModal() {
    const modal = document.getElementById("add-blog-modal");
    modal.style.display = "none";
}

//  now using browsers local storage
// Function to handle form submission for adding a new blog
function addBlog() {
    const title = document.getElementById("blog-title").value;
    const poster = document.getElementById("blog-poster").value;
    const description = document.getElementById("blog-description").value;
    const content = document.getElementById("blog-content").value;
    
    // Create a new blog post object
    const newBlogPost = {
        title,
        poster,
        description,
        content,
    };

    // Retrieve existing blog posts from LocalStorage (if any)
    let existingBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

    // Add the new blog post to the array of existing posts
    existingBlogPosts.push(newBlogPost);

    // Store the updated array back in LocalStorage
    localStorage.setItem("blogPosts", JSON.stringify(existingBlogPosts));

    // Clear the form fields
    document.getElementById("blog-title").value = "";
    document.getElementById("blog-poster").value = "";
    document.getElementById("blog-description").value = "";
    document.getElementById("blog-content").value = "";

    // Close the modal
    closeModal();

    // Refresh the home page to display the new blog post
    displayBlogPosts();
}


// Event listener for form submission
document.getElementById("add-blog-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    addBlog();
});