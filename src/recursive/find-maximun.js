exports.findMaximum = async function (input) {
    if (input.length === 1) return input[0];
    let max = await exports.findMaximum(input.slice(1));
    return input[0] > max ? input [0] : max;
}
