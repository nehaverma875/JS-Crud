let id="no";

 //localStorage.clear(); // clean data in ls

 selectData();
function manageData(){
     document.getElementById('msg').innerHTML=" ";
     let name=document.getElementById('name'). value;
     if( name==''){
        document.getElementById('msg') .innerHTML=
        'Please enter your name';
      }else {
        if(id=='no'){
          let arr=getCrudData();
           //let arr=JSON.parse(localStorage.getItem('crud'));
            if(arr==null){
                let data=[name];
                localStorage.setItem('crud',JSON.
                stringify(data));
            }else{
              arr.push(name); //second time data insert
              localStorage.setItem('crud',JSON.stringify(arr));


            }
          //  document.getElementById('name').value=''; //data empty
            document.getElementById('msg').innerHTML='Data added'; //data empty


        }else{
          let arr=getCrudData();
          arr[id]=name;
          localStorage.setItem('crud',JSON.stringify(arr));
          document.getElementById('msg').innerHTML='Data Update';
        }
        document.getElementById('name').value=''; //data empty
        
        selectData();

      }
      

}


function selectData(){
  let arr=getCrudData();
 //let arr=JSON.parse(localStorage.getItem('crud'));
 if(arr!=null){
  let html='';
  let sno=1;
  for(let k in arr){
    html=html+`<tr><td>${sno}</td><td>${arr[k]}</td><td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;;

   // '<tr><td> ${sno}</td><td>${arr[k]}</td></tr>';
    sno++;
  }
   document.getElementById('root').innerHTML=html;
 }

}

function  editData(rid){
  id=rid;
  let arr=getCrudData();
  document.getElementById('name').value=arr[rid];






}

function deleteData(rid){
  let arr=getCrudData();
  //let arr=JSON.parse(localStorage.getItem('crud'));
  arr.splice(rid,1);
  localStorage.setItem('crud',JSON.stringify(arr)); //update
  selectData();//call

  

}
//
//function getCrudData(){ //not repeated code
 // let arr=JSON.parse(localStorage.getItem('çrud)'));
//return arr;

//}
function  getCrudData(){
  let arr=JSON.parse(localStorage.getItem('crud'));
  return arr;
}