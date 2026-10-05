function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverse(str) {
    if (typeof str !== "string") {
        return "";
    }

    return str.split("").reverse().join("");
}

function contains(str, substr) {
    if (typeof str !== "string" || typeof substr !== "string") {
        return false;
    }

    return str.includes(substr);
}

module.exports = {
    capitalize,
    reverse,
    contains
};