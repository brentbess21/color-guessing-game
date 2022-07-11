/// <reference types="react-scripts" />
declare module 'Banner';
declare module 'window';
declare module '*.png' {
    const value: any;
    export = value;
}
declare module '*.jpg' {
    const value: any;
    export = value;
}
declare module '*.jpeg' {
    const value: any;
    export = value;
}
declare module '*.svg' {
    const value: any;
    export = value;
}

interface Window {
    firstSearch: any;
    firstPath: any;
    utils: any;
    myToasts: any;
    doneLoading: () => {};
    models: any;
    popupController: any;
    codePush: any;
    toasts: any;
    PushNotification: any;
    browserNavigation: any;
    sf: any;
}

interface packageJson {
    appId: string;
}

declare namespace JSX {
    interface IntrinsicElements {
        rsButton: any;
        div: any;
        Banner: any;
        Button: any;
        label: any;
        button: any;
        img: any;
        span: any;
    }
}
declare module 'Litepicker';
