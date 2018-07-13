export const Config = {
    LOCAL: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        UBICACIONES_SERVICE: 'http://localhost:8085/v1/',
        PERSONA_SERVICE: 'http://localhost:8083/v1/',
        DOCUMENTO_SERVICE: 'http://localhost:8094/v1/',
        ENTE_SERVICE: 'http://localhost:8096/v1/',
        CAMPUS_MID: 'http://localhost:8095/v1/',
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'http://localhost:9000/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
        },
    },
    PRUEBAS: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        UBICACIONES_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8085/v1/',
        PERSONA_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8083/v1/',
        DOCUMENTO_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8094/v1/',
        ENTE_SERVICE: 'http://pruebasapi.intranetoas.udistrital.edu.co:8096/v1/',
        CAMPUS_MID: 'http://pruebasapi.intranetoas.udistrital.edu.co:8095/v1/',
        CONF_MENU_SERVICE: 'http://10.20.0.254/configuracion_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.udistrital.edu.co:8244/authorize',
            CLIENTE_ID: 'pszmROXqfec4pTShgF_fn2DAAX0a',
            RESPONSE_TYPE: 'id_token token',
            REDIRECT_URL: 'http://localhost:9000/',
            SCOPE: 'openid email role documento',
            SIGN_OUT_URL: 'https://autenticacion.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'http://localhost:9000/',
        },

    },
    PREPROD: {
        NUXEO: {
            PATH: 'https://documental.udistrital.edu.co/nuxeo/',
        },
        WSO2_SERVICE: 'http://jbpm.udistritaloas.edu.co:8280/services',
        UBICACIONES_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/ubicacion_crud/v1/',
        PERSONA_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/personas_crud/v1/',
        ENTE_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/ente_crud/v1/',
        DOCUMENTO_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/documento_crud/v1/',
        CAMPUS_MID: 'https://autenticacion.portaloas.udistrital.edu.co/api/campus_mid_service/v1/',
        CONF_MENU_SERVICE: 'https://autenticacion.portaloas.udistrital.edu.co/api/configuracion_crud_api/v1/menu_opcion_padre/ArbolMenus/',
        TOKEN: {
            AUTORIZATION_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oauth2/authorize',
            CLIENTE_ID: 'iKu3JoaAbsqLoQTpIjjFlz9RfIga',
            RESPONSE_TYPE: 'id_token token',
            SCOPE: 'openid email role documento',
            REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
            SIGN_OUT_URL: 'https://autenticacion.portaloas.udistrital.edu.co/oidc/logout',
            SIGN_OUT_REDIRECT_URL: 'https://pruebascampus.portaloas.udistrital.edu.co/',
        },
    },
};

export const GENERAL = {
    ENTORNO: Config.PREPROD,
};
