const passQuietly = JSON.parse((process.env.JEST_PASS_QUIETLY || 'false').toLowerCase());

if(passQuietly) {
    console.log('is true')
}
else {
    console.log('is false')
}