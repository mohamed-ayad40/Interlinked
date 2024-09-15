document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname;
    let navLinks = document.querySelectorAll(".under-nav-links a");
    navLinks.forEach(navLink => {
        if(currentPage === navLink.pathname) {
            navLink.classList.add("active");
        }
    })
    const loginBtn = document.querySelector('.navbar .login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            loginBtn.classList.toggle('active');
        });
    }

    const signinForm = document.querySelector('.signin-form form');
    if (signinForm) {
        signinForm.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }

    const hamburger = document.querySelector('.hamburger');
    const searchButton = document.querySelector(".search-button");
    const underNavLink = document.querySelector(".under-nav-links");
    document.addEventListener("click", (e) => {
        if(e.target.classList.contains("fa-bars") && !underNavLink.classList.contains("active")) {
            underNavLink.classList.add("active");

        } else if(!e.target.classList.contains("fa-bars") && underNavLink.classList.contains("active") && !e.target.contains(underNavLink) || e.target.classList.contains("fa-bars") && underNavLink.classList.contains("active")) {
            underNavLink.classList.remove("active");

        }
    });


    const searchInput = document.querySelector('.search-container input');
    const searchButtons = document.querySelectorAll('.search-button');
    const homePage = document.querySelector("#homePage");
    const searchPage = document.querySelector("#searchPage");
    let phoneSize = window.innerWidth < 450;
    searchButtons.forEach(button => {
        button.addEventListener("click", () => {
            const query = searchInput.value.trim();
            if (!query && phoneSize) {
                searchInput.classList.toggle("active");
                homePage.classList.add("hidden");
                searchPage.classList.add("show");
            }
        });
    });

    window.addEventListener('resize', () => {
        phoneSize = window.innerWidth < 450;
    });

    const logo = document.querySelector('.logo a');
    if (logo) {
        logo.addEventListener('click', function(event) {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }
});

// document.getElementById('add-post-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting in the traditional way

//     // Get the post content from the textarea
//     const postContent = document.getElementById('post-content').value;

//     // Create a new post element
//     const newPost = document.createElement('div');
//     newPost.className = 'testimonial-item';
//     newPost.innerHTML = `
//         <img src="/Customer/default-avatar-profile-icon-vector-social-media-user-image-182145777.webp" alt="Customer" class="customer-photo" />
//         <blockquote>
//             <p>"${postContent}"</p>
//             <footer>- New User</footer>
//             <br>
//             <label for="comment-name">Comment</label>
//             <input type="text" id="comment-name" name="name" required />
//         </blockquote>
//     `;

//     // Append the new post to the posts container
//     document.querySelector('#testimonials .testimonial-container').appendChild(newPost);

//     // Clear the textarea
//     document.getElementById('post-content').value = '';
// });

let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    console.log(scrollTop)
    // If scrolling down, hide the navbar
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('navbar-hidden');
        navbar.classList.remove('navbar-visible');
    }
    // If scrolling up, show the navbar
    else {
        navbar.classList.add('navbar-visible');
        navbar.classList.remove('navbar-hidden');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});
