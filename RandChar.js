function RandomChar(length) {
    let res = '';
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const lengthOfCharacter = character.length;
    for (let index = 0; index < length; index++) {
        res += character.charAt(Math.floor(Math.random() * lengthOfCharacter));
    }
    return res;
}
console.log(RandomChar(12));