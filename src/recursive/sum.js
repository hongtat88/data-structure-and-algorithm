exports.sum = async function (input) {
    if (input.length == 1) return input[0];
    return input[0] + await exports.sum(input.slice(1));
};
