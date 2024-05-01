let input=document.querySelector('#inpName')


const myPromise=new Promise((resolve,reject) =>{
   
    let data = {
        baku: {
            temp: {
                day: 23,
                night: 12,
            },
            wind: {
                speed: '23 m/s'
            },
            humudity: {
                day: "50%",
                night: '23%'
            },
            locat: {
                city_name: 'Baku',
                country: "Azerbaijan",
                timezone: {
                    tm: 14400,
                    shortN: 'AZ/Baku'
                }
            }
        },
        sumgayit:{
            temp: {
                day: 25,
                night: 12,
            },
            wind: {
                speed: '23 m/s'
            },
            humudity: {
                day: "60%",
                night: '25%'
            },
            locat: {
                city_name: 'Sumgayit',
                country: "Azerbaijan",
                timezone: {
                    tm: 14400,
                    shortN: 'AZ/Baku'
                }
            }
            
    
        }
    }
    setTimeout(()=>{
 if(Object.keys(data).length != 0){
     resolve(data)
}
else{
    reject('data not found')
}
    },3000)

});
 console.log(myPromise);


 myPromise.then((data) =>{
    const arr=Object.values(data)
    console.log(arr);
    arr.forEach((e)=>console.log(e));
    const {baku,sumgayit}=data;
    console.log(sumgayit);
    console.log(data);
    document.querySelector('.btn-text').addEventListener('click', () => {
        let card = document.querySelector('.card')
    
        {
            for (let i = 0; i < arr.length; i++) {
                if (input.value.toLowerCase() == arr[i].locat.city_name.toLowerCase()) {
                    card.style.display="block"
                    card.innerHTML = `<h3>${arr[i].locat.country}</h3>
                    <h4>${arr[i].locat.city_name}</h4>
                    <p>Temp-day:${arr[i].temp.day}°C</p>
                    <p>Temp-night:${arr[i].temp.night}°C</p>
                    <p>Wind:${arr[i].wind.speed}</p>
                    <p>Humudity-day:${arr[i].humudity.day}</p>
                    <p>Humudity-night:${arr[i].humudity.night}</p>
                    <p>Timezone-tm:${arr[i].locat.timezone.tm}</p>
                    <p>Timezone-shortN:${arr[i].locat.timezone.shortN}</p>`
                   
                 
                 
                }
    
            }
        }
    })

 }).catch ((error)=>{
    console.log(error);
 })






