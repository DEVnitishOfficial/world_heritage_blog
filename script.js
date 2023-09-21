
// Function to display existing blog posts on the home page
function displayBlogPosts() {
    const homePage = document.getElementById("home-page");

    // Clear any existing content
    homePage.innerHTML = "";

     // Retrieve existing blog posts from LocalStorage
     const existingBlogPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
     
     for (let i = 0; i < existingBlogPosts.length; i++) {
        const post = existingBlogPosts[i];

        const blogCard = document.createElement("div") 
        blogCard.classList.add("blog-card")

        const imgElement = document.createElement("img")
        imgElement.src = post.poster

        const title = document.createElement("h2");
        title.textContent = post.title;

        const summary = document.createElement("p");
        summary.textContent = post.description;
        
        const Button = document.createElement("button")
        Button.textContent = "Read more"

        Button.addEventListener("click", () => {
            const blogPostURL = `blog-post.html?index=${i}`;
            window.location.href = blogPostURL;
        })

        blogCard.appendChild(imgElement);
        blogCard.appendChild(title);
        blogCard.appendChild(summary);
        blogCard.appendChild(Button); 

        homePage.appendChild(blogCard);
    }
}

// Call the function to initially display blog posts
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