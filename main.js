const str = `
010-1234-5678
thesecon@gmail.com
https://www.sedaily.com
The auick brown fox jumps over the lazy dog.
http://localhost:1234
abbcccdddd
동해물과_백두산이 마르고 닳도록
`
//const regexp = new RegExp('the','gi')
//console.log(regexp.test(str))
//console.log(str.replace(regexp,'AAA'))

console.log(
    str.match(/\b/g)
    )


