// ==UserScript==
// @name            IBM Broken URLs Replacer
// @description     Replaces the IBM Broken URLs on support pages with the working ones
// @version         1.0.0
// @author          PlayDay (https://github.com/playday3008)
// @namespace       https://github.com/playday3008/IBM_Broken_URL_Replacer
// @supportURL      https://github.com/playday3008/IBM_Broken_URL_Replacer/issues
// @license         MIT
// @match           https://www.ibm.com/support/pages/*
// @grant           none
// @run-at          document-end
// ==/UserScript==

document.querySelectorAll('[href*="ftp://ftp.software.ibm.com"]').forEach((e) => {
    e.href = e.href.replace('ftp://ftp.software.ibm.com', 'https://public.dhe.ibm.com');
});
document.querySelectorAll('[href*="ftp://download2.boulder.ibm.com/ecc"]').forEach((e) => {
    e.href = e.href.replace('ftp://download2.boulder.ibm.com/ecc', 'https://download2.boulder.ibm.com');
});