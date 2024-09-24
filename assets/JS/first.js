var reg = document.querySelector(".reg");
var names = document.querySelector("#name");
var desc = document.querySelector("#desc");
var price = document.querySelector("#price");
var data =[];


reg.onsubmit = function (e) {
    e.preventDefault();
    var disp = {
        Name:names.value,
        Description:desc.value,
        Price:price.value,
    };
    data.push(disp);
    displayall();
}
    function displayall(){
        var teta = ``;
        for(var index=0;index<data.length;index++){
            teta += `<tr>
                    <td>${data[index].Name}</td>
                    <td>${data[index].Description}</td>
                    <td>${data[index].Price}</td>
                    </tr>`;
        }
           document.querySelector("tbody").innerHTML=teta;
    }
    