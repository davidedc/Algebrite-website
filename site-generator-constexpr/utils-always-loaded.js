function compiled() {
    return (!window._ConstexprJS_ && !window.location.href.includes("site-generator-constexpr") );
}

function compiling() {
    return (!!window._ConstexprJS_);
}
