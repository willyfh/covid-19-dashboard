/* TODO refactor and cleanup the code */


function splitCSV(str) {
    //split the str first  
    //then merge the elments between two double quotes  
    var delimiter = ',';
    var quotes = '"';
    var elements = str.split(delimiter);
    var newElements = [];
    for (var i = 0; i < elements.length; ++i) {
        if (elements[i].indexOf(quotes) >= 0) { //the left double quotes is found  
            var indexOfRightQuotes = -1;
            var tmp = elements[i];
            //find the right double quotes  
            for (var j = i + 1; j < elements.length; ++j) {
                if (elements[j].indexOf(quotes) >= 0) {
                    indexOfRightQuotes = j;
                    break;
                }
            }
            //found the right double quotes  
            //merge all the elements between double quotes  
            if (-1 != indexOfRightQuotes) {
                for (var j = i + 1; j <= indexOfRightQuotes; ++j) {
                    tmp = tmp + delimiter + elements[j];
                }
                newElements.push(tmp);
                i = indexOfRightQuotes;
            } else { //right double quotes is not found  
                newElements.push(elements[i]);
            }
        } else { //no left double quotes is found  
            newElements.push(elements[i]);
        }
    }

    return newElements;
}

function processData(allText) {

    var allTextLines = allText.split(/\r\n|\n/);
    var entries = splitCSV(allTextLines[0])

    var record_num = entries.length;
    var lines = [];
    var headings = entries;
    allTextLines.shift()
    var dat = []
    var dat_dict = {}
    var coord = {}
    var max = 0
    var sum = 0
    var prevSum = 0
    var infected_count = 0
    var last_week_infected_count = 0
    var infected_countries = {}
    var last_week_infected_countries = {}
    var last_30_days_sums = []
    for (var i = 0; i < 30; i++) last_30_days_sums[i] = 0;

    while (allTextLines.length > 0) {
        entries = splitCSV(allTextLines[0])
        
        var tarr = [];
        var prov = entries.shift()
        if (prov == undefined || prov == '') {
            prov = ''
        } else {
            prov = prov.replace(/['"]+/g, '') + " - "
        }
        var cnt = entries.shift()
        if (cnt == undefined) {
            cnt = ''
        } else {
            cnt = cnt.replace(/['"]+/g, '')
        }
        var _name = prov + cnt
        var loc = []
        loc.unshift(parseFloat(entries.shift()))
        loc.unshift(parseFloat(entries.shift()))
        var latest = 0
        var prev = 0

        latest = parseFloat(entries[entries.length-1])
        prev = parseFloat(entries[entries.length-2])
        last_week = parseFloat(entries[entries.length-8])

        if (Number.isNaN(latest)) {
            latest = 0;
        }
        if (Number.isNaN(prev)) {
            prev = 0;
        }
        if (Number.isNaN(last_week)) {
            last_week = 0;
        }

        if (!Number.isNaN(loc[0]) && !Number.isNaN(loc[1])) {

            for (var i = 30; i>=1; i--) {
                var num = parseFloat(entries[entries.length-i])
                if (Number.isNaN(num)){
                    num = 10;
                }
                last_30_days_sums[30-i] += num
            }

            if (num > max) {
                max = num
            }

            dat.push({
                name: _name,
                value: num
            })
            dat_dict[_name] = num
            coord[_name] = loc

            if (num != 0 && infected_countries[cnt] == undefined && cnt != 'Others') {
                infected_count += 1
                infected_countries[cnt] = num
            }else {
                if (infected_countries[cnt] == undefined){
                    infected_countries[cnt] = num
                }else{
                    infected_countries[cnt] += num
                }
            }

            if (last_week != 0 && last_week_infected_countries[cnt] == undefined && cnt != 'Others') {
                last_week_infected_count += 1
                last_week_infected_countries[cnt] = 1
            }
        }
        
        allTextLines.shift()
    }
    return [dat, coord, max, dat_dict, last_30_days_sums[29], last_30_days_sums[29]-last_30_days_sums[28], infected_count, infected_count-last_week_infected_count, infected_countries, last_30_days_sums, headings]

};

var convertData = function(data, geoCoordMap) {
    var res = [];
    //  alert(JSON.stringify(data))
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
/*
var url_confirmed = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
var url_death = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv"
var url_recovered = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv"
*/
var url_confirmed = "/time_series_19-covid-Confirmed.csv";
var url_death = "/time_series_19-covid-Deaths.csv";
var url_recovered = "/time_series_19-covid-Recovered.csv";

$.ajax({
    type: "GET",
    url: url_confirmed,
    dataType: "text"
}).done(function(confirmed) {

        $.ajax({
            type: "GET",
            url: url_death,
            dataType: "text"
        }).done(function(death) {
             
                $.ajax({
                    type: "GET",
                    url: url_recovered,
                    dataType: "text"
                }).done(function(recovered) {
                        var values = processData(confirmed);
                        var data = values[0]

                        data.sort(function (a, b) {
                            return b.value - a.value;
                        })

                        var geoCoordMap = values[1]
                        var max = values[2]
                        var total_confirmed = values[4]
                        var total_confirmed_changes = values[5]
                        var total_infected_count = values[6]
                        var infected_count_changes = values[7]
                        var infected_countries = values[8]
                        var last_30_confirmed = values[9]
                        var headers = values[10]

                        xlabels = []
                        for (var i = headers.length-1; i>= headers.length-30; i--) {
                            xlabels.unshift(headers[i])
                        }

                        // exclude Others country
                        infected_countries['Others'] = 0
                        var sortedCountries = [];
                        for (var country in infected_countries) {
                            var country_name = country
                            // special case
                            if (country_name=='Mainland China'){
                                country_name='China'
                            }
                            sortedCountries.push([country_name, infected_countries[country]]);
                        }
                        sortedCountries.sort(function(a, b) {
                            return b[1] - a[1];
                        });

                        var values = processData(death);
                        var death_data = values[3]
                        var total_death = values[4]
                        var total_death_changes = values[5]
                        var last_30_death = values[9]

                        var values = processData(recovered);
                        var recovered_data = values[3]
                        var total_recovered = values[4]
                        var total_recovered_changes = values[5]
                        var last_30_recovered = values[9]


                        var mapOption = {
                            backgroundColor: '#111',

                            title: {
                                text: 'Confirmed Case Map',
                                subtext: 'Last update: '+new Date(xlabels[29]).toDateString(),
                                top: 10,
                                left: 10,
                                textStyle: {
                                    color: '#eee',
                                    fontSize: 16
                                }
                            },
                            tooltip: {
                                trigger: 'item',
                                showDelay: 0,
                                transitionDuration: 0.2,

                                formatter: function(params) {
                                    var value = (params.value[2]);
                                    if (params.value == '-') {
                                        return '-';
                                    } else {
                                        return params.name + '<br/>Confirmed : <span class="red">' + formatNumber(value)+ '</span><br/>Recovered : <span class="green">' + formatNumber(recovered_data[params.name])+ '</span><br/>Deaths : <span class="dimgray">' + formatNumber(death_data[params.name])+"</span>";
                                    }
                                }
                            },
                            dataRange: {

                                x: 'right',
                                y: 'top',
                                min: 0.0,
                                max: max,
                                precision: 1,
                                formatter: function(v, v2) {
                                    if (v2 != "Infinity") {
                                        return v + " - " + v2 + " cases"
                                    } else {
                                        return v + "+ cases"
                                    }
                                },

                                selectedMode: true,
                                hoverLink: true,
                                realtime: true,
                                splitList: [{
                                        start: 0,
                                        end: 10
                                    },
                                    {
                                        start: 10,
                                        end: 49
                                    },
                                    {
                                        start: 50,
                                        end: 99
                                    },
                                    {
                                        start: 100
                                    }
                                ],
                                color: ['darkred', 'orangered', 'orange', 'yellow'],

                                calculable: false,
                                textStyle: {
                                    fontFamily: "'Lora', serif",
                                    color: "#eee"
                                }
                            },
                            geo: {
                                map: 'world',
                                label: {
                                    emphasis: {
                                        show: false
                                    }
                                },
                                roam: true,
                                itemStyle: {
                                    normal: {
                                        areaColor: '#333',
                                        borderColor: '#111'
                                    },
                                    emphasis: {
                                        areaColor: '#2a333d'
                                    }
                                }
                            },
                            series: [{
                                    name: 'pm2.5',
                                    type: 'scatter',
                                    coordinateSystem: 'geo',
                                    data: convertData(data, geoCoordMap),
                                    symbolSize: function(v) {
                                        return Math.pow(v[2], 1 / 4) * 3
                                    },
                                    label: {
                                        normal: {
                                            formatter: '{b}',
                                            position: 'right',
                                            show: false
                                        },
                                        emphasis: {
                                            show: true
                                        }
                                    },
                                    itemStyle: {
                                        normal: {
                                            color: '#ddb926'
                                        }
                                    }
                                }
                            ]
                        };

                        $.get('assets/js/geojson.json', function(geoJson) {

                            echarts.registerMap('world', geoJson);
                            var mapChart = echarts.init(document.getElementById('map'));
                            mapChart.setOption(mapOption);
                        });


                        option = {

                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: ['confirmed', 'recovered', 'deaths'],
                                bottom: 10,
                                textStyle: {
                                    color: '#eee'
                                }
                            },
                            grid: {
                                top: 20,
                                left: '3%',
                                right: '4%',
                                bottom: 40,
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                data: xlabels.map(function(x) {return x.slice(0, x.length-3)}),
                                axisLabel: {
                                    color: '#eee',
                                    interval: 6,
                                    showMaxLabel: true
                                }
                            },
                            yAxis: {
                                type: 'value',
                                axisLabel: {
                                    color: '#eee'
                                }
                            },
                            series: [{
                                    name: 'confirmed',
                                    type: 'line',
                                    color: 'red',
                                    data: last_30_confirmed
                                },
                                {
                                    name: 'recovered',
                                    type: 'line',
                                    color: 'green',
                                    data: last_30_recovered
                                },
                                {
                                    name: 'deaths',
                                    type: 'line',
                                    color: 'dimgray',
                                    data: last_30_death
                                }
                            ]
                        };


                        var ctx = document.getElementById("scatter-plot");
                        var scatterPlot = echarts.init(document.getElementById('scatter-plot'));
                        scatterPlot.setOption(option);

                        var confirmed_count = document.getElementById("total-confirmed-count")
                        confirmed_count.innerHTML = formatNumber(total_confirmed)

                        var death_count = document.getElementById("total-death-count")
                        death_count.innerHTML = formatNumber(total_death)

                        var recovered_count = document.getElementById("total-recovered-count")  
                        recovered_count.innerHTML = formatNumber(total_recovered)

                        var confirmed_changes = document.getElementById("total-confirmed-changes-count")
                        confirmed_changes.innerHTML = "+"+formatNumber(total_confirmed_changes)

                        var death_changes = document.getElementById("total-death-changes-count")
                        death_changes.innerHTML = "+"+formatNumber(total_death_changes)

                        var recovered_changes = document.getElementById("total-recovered-changes-count")  
                        recovered_changes.innerHTML = "+"+formatNumber(total_recovered_changes)

                        var infected_count = document.getElementById("total-infected-count")  
                        infected_count.innerHTML = formatNumber(total_infected_count)

                        var infected_changes = document.getElementById("total-infected-changes-count")
                        infected_changes.innerHTML = "+"+formatNumber(infected_count_changes)

                        for (var i=1; i <= 10; i++) {
                            var country_count = document.getElementById("country-count-"+i)
                            var country_name = document.getElementById("country-name-"+i)
                            country_count.innerHTML = formatNumber(sortedCountries[i-1][1])
                            country_name.innerHTML = sortedCountries[i-1][0]
                        }
                    
                }).fail(function() {
                    alert("Failed to retrieve data.");
                });
            
        }).fail(function() {
            alert("Failed to retrieve data.");
        });

}).fail(function() {
    alert("Failed to retrieve data.");
});