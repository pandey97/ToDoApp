import LocalizedStrings from "react-localization";

export const localStrings = new LocalizedStrings({
  sp: {
    boilerPlateHeader: "Caldera RNPlaca",
    welcomeBack: "Bienvenido de nuevo",
    login: "Acceso",
    forgotPassword: "Has olvidado tu contraseña",
    placeholderEmail: "Correo electrónico",
    placeholderPassword: "Contraseña",
    changeTheme: "Cambiar de tema",
    changeLanguage: "Cambiar idioma",
  },
  en: {
    boilerPlateHeader: "RN BoilerPlate",
    welcomeBack: "Welcome Back",
    login: "Login",
    forgotPassword: "Forgot Password",
    placeholderEmail: "Email",
    placeholderPassword: "Password",
    changeTheme: "Change Theme",
    changeLanguage: "Change Language",
    serverError: "Something went wrong!",
  },
});

localStrings.setLanguage("en");