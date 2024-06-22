import { SessionStorage } from "quasar";
import { api } from "src/boot/axios";
import { ref } from "vue";

export const currentPath = ref({
    value: '',
    buttonString: 'Registrarse',
    nextRoute: 'register',
    changePath(path) {
        switch (path) {
            case '':
                this.buttonString = 'Registrarse'
                this.nextRoute = 'register'
                break;
            case 'login':
                this.buttonString = 'Registrarse'
                this.nextRoute = 'register'
                break;
            case 'register':
                this.buttonString = 'Iniciar Sesión'
                this.nextRoute = 'login'
                break;
            case 'client':
                this.buttonString = 'Cerrar Sesión'
                this.nextRoute = 'login'
                break;
            default:
                break;
        }
    }

})

export const authUser = ref({
    isAuth: false,
    async verifyToken() {
        const token = SessionStorage.getItem("Authorization")
        if (token) api.defaults.headers.common["Authorization"] = token;
        const verify = await api.get('/users/verifyToken')
        this.isAuth = verify.data.status
        return verify.data.status
    }
})