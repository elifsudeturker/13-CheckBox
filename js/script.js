document.getElementById('tr').addEventListener('click', tr_clicked);

function tr_clicked(){
    if(document.getElementById('tr').checked){
        document.getElementById('istanbul').checked=true
        document.getElementById('ankara').checked=true
        document.getElementById('izmir').checked=true
    }
else{
        document.getElementById('istanbul').checked=false
        document.getElementById('ankara').checked=false
        document.getElementById('izmir').checked=false
    }
 }

//////////////////////////////

document.getElementById('istanbul').addEventListener('click', city_clicked);
document.getElementById('ankara').addEventListener('click', city_clicked);
document.getElementById('izmir').addEventListener('click', city_clicked);

function city_clicked(){
    if(document.getElementById('istanbul').checked
    && document.getElementById('ankara').checked
    && document.getElementById('izmir'))
        document.getElementById('tr').checked=true

    else
    document.getElementById('tr').checked=false
}

function city_clicked2(){
if(!document.getElementById('istanbul').checked
||!document.getElementById('ankara').checked
||!document.getElementById('izmir').checked)
document.getElementById('tr').checked=false;
else
document.getElementById('tr').checked=true;

}