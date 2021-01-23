import {CLOSE_MOBILE_NAVBAR, OPEN_MOBILE_NAVBAR} from "../contants";

export const openMobileNavbar = () => ({
    type: OPEN_MOBILE_NAVBAR,
});

export const closeMobileNavbar = () => ({
    type: CLOSE_MOBILE_NAVBAR,
});