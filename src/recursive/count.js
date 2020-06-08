exports.count = async function (input) {
    if (input.length == 1) return 1;
    return 1 + await exports.count(input.slice(1));
};