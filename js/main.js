//crud 

// c => create  

// r => read ,retrive 

// u => update 

// d=> delete 

var nameInput = document.getElementById('nameInput');
var priceInput = document.getElementById('priceInput');
var catgoeryInput = document.getElementById('catgoeryInput');
var descInput = document.getElementById('descInput');
var productList = [];  //data base 
var searchInput =document.getElementById('searchInput');
var addBtn = document.getElementById('addBtn');
var updateIndex=0;


if (localStorage.getItem('productData') != null) {
    productList = JSON.parse(localStorage.getItem('productData'));
    console.log(productList);

    drawTable(productList);
}


// json => array of object >>>> object 

// js object notation 



function addProdcut() {

    if(addBtn.innerHTML === 'Update Product'){
        updateProdcut();
    }
    else{

        
    var product = {
        name: nameInput.value,
        price: priceInput.value,
        category: catgoeryInput.value,
        descpition: descInput.value
    }

    productList.push(product);

    var x = JSON.stringify(productList)

    console.log(x);

    localStorage.setItem('productData', x)


     clearForm();
    // drawTable();
    displayLastIndexArray();

    }






}

function clearForm() {
    nameInput.value = '';
    priceInput.value = '';
    catgoeryInput.value = '';
    descInput.value = '';

}

function displayLastIndexArray() {
    var contatiner = '';
    var lastIndex = productList.length - 1

    // for(var i=0 ; i < productList.length ; i++ ){
    contatiner = `  <tr class="">
        <td scope="row">${lastIndex + 1}</td>
        <td>${productList[lastIndex].name}</td>
        <td>${productList[lastIndex].price}</td>
        <td>${productList[lastIndex].category}</td>
        <td>${productList[lastIndex].descpition}</td>
        <td><button onclick="setFormForUpdate(${lastIndex})"  class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button   onclick="deleteProduct(${lastIndex})"  class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
      </tr>`
    //}

    document.getElementById('tbody').innerHTML += contatiner;

    console.log(contatiner);
}

function drawTable(list,searchTerm) {
    var contatiner = '';
    if(list.length == 0){
        //NO DATA

        contatiner = `  <tr class="">
        <td scope="row" colspan="7" class="fw-bolder text-danger">NO DATA</td>
    
      </tr>`

    }
    else{
     

        for (var i = 0; i < list.length; i++) {
            contatiner += `  <tr class="">
            <td scope="row">${i + 1}</td> 
            <td>${searchTerm ? list[i].name.replaceAll(searchTerm,`<span class="bg-danger text-warning">${searchTerm}</span>`) :list[i].name 
        }</td>
            <td>${list[i].price}</td>
            <td>${list[i].category}</td>
            <td>${list[i].descpition}</td>
            <td><button onclick="setFormForUpdate(${i})"  class="btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button></td>
            <td><button onclick="deleteProduct(${i})"   class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button></td>
          </tr>`
        }
    
        // console.log(contatiner);
    
       
    
        console.log(contatiner);
    }
    document.getElementById('tbody').innerHTML = contatiner;
   
}

function search(){
    // console.log(productList[0].name);
    var searchProducts = []

    for(var i =0 ; i<productList.length  ; i++){
        if(  productList[i].name.toUpperCase().includes(searchInput.value.toUpperCase())){
            searchProducts.push(productList[i])
        }
    }
    drawTable(searchProducts,searchInput.value);


}

function deleteProduct(index){

    productList.splice(index,1);
    localStorage.setItem('productData',JSON.stringify(productList))

    drawTable(productList);
}


function setFormForUpdate(index){
    updateIndex = index;
    nameInput.value = productList[index].name;
    priceInput.value = productList[index].price;
    catgoeryInput.value = productList[index].category;
    descInput.value = productList[index].descpition;

    addBtn.innerHTML ='Update Product';
    
}



function updateProdcut(){

       
    var product = {
        name: nameInput.value,
        price: priceInput.value,
        category: catgoeryInput.value,
        descpition: descInput.value
    }


    productList.splice(updateIndex,1,product)

    
//    productList[updateIndex].name = nameInput.value;
//    productList[updateIndex].price = priceInput.value;
//    productList[updateIndex].category = catgoeryInput.value;
//    productList[updateIndex].descpition = descInput.value;

   clearForm();
   
   localStorage.setItem('productData',JSON.stringify(productList));

   addBtn.innerHTML ='Add Product'; 
 
   drawTable(productList);
}



// ternary operator 

// condition? true : false;


// if(searchTerm){
    
// }
// else{
//     list[i].name
// }

// var x = 'web' ;

// // document.getElementById('demo').innerHTML =  x.replace('w' ,'<span class="bg-danger text-warning fw-bolder ">W</span>') 
// console.log();

//save data => data base => backend

// fron end => browser >>> client side

// min data base => localstorage  => key value pair


//local browser ,lap ,domain

// 5mb => 10mb

// save data => text (string)


// localStorage.setItem('userName','Ahmed Ali')
// localStorage.setItem('userName','mostafa Ali')
// localStorage.setItem('age','20')

// var x =localStorage.getItem('username');

// localStorage.removeItem('age')
// localStorage.clear();

// var x=localStorage.length


// console.log(x);








