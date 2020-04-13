const csc = require('country-state-city');
const countries = csc.default.getAllCountries();
const namePhoneGenerator = require('./namephonegenerator/dist');
const { emailList } = require('./public/static/email.json');

$(document).ready(()=>{
    // Loading countries initially
    let countriesList = ['UNITED KINGDOM','INDONESIA','SINGAPORE','INDIA','NEPAL','MAURITIUS','SRI LANKA','BANGLADESH','SWEDEN']
    countries.filter((d)=>countriesList.indexOf(d.name.toUpperCase())!=-1).forEach((data)=>{
        $("#countryList")
        .append($(`<option ${data.id==230?'selected':''}></option>`)
        .attr("value",data.id)
        .text(data.name));
    })

    // Load state list function
    const loadStateList = (value)=>{
        csc.default.getStatesOfCountry(value).forEach((data)=>{
            $("#stateList")
            .append($(`<option ${data.id==35?'selected':''}></option>`)
            .attr("value",data.id)
            .text(data.name));
        })
    }
    loadStateList('101');

    // Loading states based on county id
    $('#countryList').change(()=>{
        loadStaticData()
        // $("#stateList").html('');
        // $("#cityList").html('')
        // loadStateList($('#countryList').val());
    })

    // Load city list
    const loadCityList = (value)=>{
        csc.default.getCitiesOfState(value).forEach((data)=>{
            $("#cityList")
            .append($(`<option ${data.id==4328?'selected':''}></option>`)
            .attr("value",data.id)
            .text(data.name));
        });
    }
    loadCityList('35');

    // Loading city based on state id
    $('#stateList').change(()=>{
        $("#cityList").html('')
        loadCityList($('#stateList').val());
    })

    //City change
    $('#cityList').change(()=>{
        loadStaticData()
    })

    // Load static data
    const loadStaticData = ()=>{
        const keyArray = ['copper','zinc','earth','gold','platinum'];
        let jsonData = {}
        namePhoneGenerator.getNameSplitArray(3,5).forEach((d,i)=>{
            jsonData[keyArray[i]] = d;
        })
        Object.keys(jsonData).forEach((d)=>{
            $(`#${d}`).html('')
            jsonData[d].forEach(d1=>{
                $(`#${d}`).append(`
                    <p class="panel-block">
                        ${d1}
                    </p>
                    `)
            })
        })
    }
    loadStaticData();

    // Load static email list
    const loadEmailList = ()=>{
        let jsonData = {};
        namePhoneGenerator.getNameSplitArray(3,5,emailList).forEach((d,i)=>{
            jsonData[`emailCustom${i+1}`] = d;
        })
        Object.keys(jsonData).forEach((d)=>{
            $(`#${d}`).html('')
            jsonData[d].forEach(d1=>{
                $(`#${d}`).append(`
                    <p class="panel-block premium_member_fonts">
                        ${d1}
                    </p>
                    `)
            })
        })
    }
    loadEmailList();
    // setInterval(()=>{
    //     loadEmailList();
    // },5000)
});