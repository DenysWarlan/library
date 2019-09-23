export class AuthService {
    isAuthentication = false;

    login() {
        this.isAuthentication = true;
    }

    logout() {
        this.isAuthentication = false;
        window.localStorage.clear();
    }

    isLoggedIn(): boolean {
        const user = window.localStorage.getItem('user');
        if (user) {
            return true;
        } else {
            return false;
        }
    }
}
