function init(){
    console.log('ciao');
    let option={};
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(r=>r.json())
    .then(data=>{
        let columns=[];
        for(key in data[0]){
            if(data[0].hasOwnProperty(key)){
                columns.push({'data':key} )
            }
        }
        let data_table=[];
        data.forEach(elem => {   
            let data_single={};        
            for(key in elem){
                if(elem.hasOwnProperty(key)){
                    let nome=key;
                    data_single[nome]=elem[key];
                }
            }        
            data_table.push(data_single);
        });
        $('#table').DataTable( {
            data: data_table,
            columns: columns
        } );

    });
}
$(document).ready(init());