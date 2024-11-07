const userslist = []; // No need for a predefined list of users.
const loggedIn = createSignal(false);
const user = createSignal("");

// Check if a user is already logged in from a previous session.
if (localStorage.getItem("loggedIn")) {
    loggedIn.value = true;
    user.value = localStorage.getItem("loggedIn");
}

createEffect(() => {
    if (!loggedIn.value) {
        window.lg.style.display = "none";
    } else {
        window.lg.style.display = "block";
    }
});

document.body.onload = () => {
    /** @type {HTMLDialogElement} */
    const modal = window.modal;
    const loginbtn = window.login;

    loginbtn.addEventListener("click", () => {
        if (loggedIn.value) {
            return;
        }
        modal.style.display = "grid";
        modal.classList.add("opacity-100");
        modal.showModal();
    });

    /** @type {HTMLInputElement} */
    const email = window.email;
    /** @type {HTMLInputElement} */
    const password = window.pass;
    const closeButton = window.cbtn;

    closeButton.addEventListener("click", () => {
        modal.classList.remove("opacity-100");
        modal.classList.add("opacity-0");
        modal.style.display = "none";
        modal.close();
    });

    window.dform.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevents form from submitting in the traditional way.

        if (email.value) { // Login with any entered username.
            console.log("Logged In");
            user.value = email.value; // Use the entered email as the username.
            login(email.value);
        }

        modal.style.display = "none";
        modal.close();
    });

    window.lg.addEventListener("click", () => {
        localStorage.removeItem("loggedIn");
        loggedIn.value = false;
        user.value = "";
    });

    function login(username) {
        loggedIn.value = true;
        localStorage.setItem("loggedIn", username);
    }

    createEffect(() => {
        if (loggedIn.value) {
            loginbtn.innerHTML = user.value;
        } else {
            loginbtn.innerHTML = "Log In";
        }
    });
};
