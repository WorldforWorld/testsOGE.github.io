var arr = [4,2,3,4,6,8,7,9,6,1];
var m = arr[0];
console.log(m);
for (let i = 1; i < 10; i++) {
  if (arr[i] > m) {
    m = arr[i];
    setInterval($('.div').text('Результат = '+ m), 5000);
  }
}