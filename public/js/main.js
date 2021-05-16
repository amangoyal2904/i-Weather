const submitBtn=document.getElementById("submitBtn");
const city_name=document.getElementById("city_name");
const city_output=document.getElementById("city_output");
const tempe=document.getElementById("tempe");
const temp_status=document.getElementById("temp_status");
const data_hide=document.querySelector('.main_layer');
const getInfo = async(event) =>{
    event.preventDefault();
    let cityval=city_name.value;
    if(cityval==""){
        city_output.innerText=`Please write the name of city before search` ;
        data_hide.classList.add('data_hide');
    }
    else{
        try{

            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cf3e7a4031eb0eb56e67dbafe5f01994`;
            if(location.protocol=="http:"){
                url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cf3e7a4031eb0eb56e67dbafe5f01994`;
            }
            else{
               url= `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=cf3e7a4031eb0eb56e67dbafe5f01994`;
            }
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            const arrData=[data];
            city_output.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            tempe.innerText=arrData[0].main.temp;
            let tempMood=arrData[0].weather[0].main;
            if(tempMood=="Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>";
            }
            data_hide.classList.remove('data_hide');
        }
        catch{
            city_output.innerText=`Please enter the city name correctly`;
            data_hide.classList.add('data_hide');
        }
        
    }
}
submitBtn.addEventListener('click',getInfo);