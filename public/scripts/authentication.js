const token = localStorage.getItem('auth-token');

if(location.pathname === '/users'){

    if(token == null || token == undefined){
        location.pathname = '/signIn';
    }
} 



    const registerForm = document.getElementById('register_form');
    const signInForm = document.getElementById('signIn_Form');
    const signOutBtn = document.getElementById('signOut');

    
    if (registerForm != null) {

        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const uname = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // console.log(registerForm);
            const authToken = await fetch('http://localhost:3000/users/new', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    uname,
                    email,
                    password
                })
            })

            const { token } = await authToken.json();
            console.log(token);


            if (token != null) {
                localStorage.setItem('auth-token', token);
                location.pathname = '/users';
            }

        })
    }


    if(signInForm != null){

        signInForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            const email = document.getElementById('semail').value;
            const password = document.getElementById('spassword').value;

            const authToken = await fetch('http://localhost:3000/signIn', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify({
                    email, 
                    password
                })
            })

            const token = await authToken.json();
            console.log(token);

            if (token != null) {
                localStorage.setItem('auth-token', token);
                location.pathname = '/users';
            }


        })

    }

    
// Handling Logout State - (removes auth token from localstorage)
const logout = document.getElementById('logoutForm');

if(logout){
    logout.addEventListener('submit', () => {
        localStorage.removeItem('auth-token');
    })
}




