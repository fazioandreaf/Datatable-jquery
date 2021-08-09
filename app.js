function init(){
    console.log('ciao');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r=>r.json())
    .then(data=>console.log(data))
    const option={};
    $('#table').DataTable(option);
}
$(document).ready(init());