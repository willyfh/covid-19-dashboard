/*require.config({
    packages: [
        {
            name: 'echarts',
            location: 'https://cdn.rawgit.com/ecomfe/echarts/master/src',
            main: 'echarts'
        },
        {
            name: 'zrender',
            location: '//ecomfe.github.io/zrender/src',
            main: 'zrender'
        }
    ]
});*/
function splitCSVButIgnoreCommasInDoublequotes(str) {
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
    //var record_num = 5;  // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = splitCSVButIgnoreCommasInDoublequotes(allTextLines[0])

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
    //var headings = entries.splice(0,record_num);
    while (allTextLines.length > 0) {
        entries = splitCSVButIgnoreCommasInDoublequotes(allTextLines[0])
        while (entries.length > 0) {
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
            for (var j = 4; j < record_num; j++) {
                num = parseFloat(entries.shift())
                if (Number.isNaN(num) == false) {
                    prev = latest
                    latest = num;
                }
            }
            if (latest > max) {
                max = latest
            }
            if (!Number.isNaN(loc[0]) && !Number.isNaN(loc[1])) {
                dat.push({
                    name: _name,
                    value: latest
                })
                dat_dict[_name] = latest
                coord[_name] = loc

                sum += latest
                prevSum += prev
            }
        }
        allTextLines.shift()
    }
    return [dat, coord, max, dat_dict, sum, sum-prevSum]

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
var url_confirmed = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
var url_death = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Deaths.csv"
var url_recovered = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Recovered.csv"
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
                        var geoCoordMap = values[1]
                        var max = values[2]
                        var total_confirmed = values[4]
                        var total_confirmed_changes = values[5]

                        var values = processData(death);
                        var death_data = values[3]
                        var total_death = values[4]
                        var total_death_changes = values[5]

                        var values = processData(recovered);
                        var recovered_data = values[3]
                        var total_recovered = values[4]
                        var total_recovered_changes = values[5]

                        console.log(recovered_data)

                        var mapOption = {
                            backgroundColor: '#111',

                            title: {
                                text: 'Confirmed Case Map',
                                subtext: 'Data source: https://github.com/CSSEGISandData/COVID-19',
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
                                        return "Location: " + params.name + '<br/>Confirmed : <span class="red">' + value+ '</span><br/>Recovered : <span class="green">' + recovered_data[params.name]+ '</span><br/>Deaths : <span class="dimgray">' + death_data[params.name]+"</span>";
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

                                //text:['8.0 SR','4.0 SR'],

                                calculable: false,
                                textStyle: {
                                    fontFamily: "'Lora', serif",
                                    color: "#ccc"
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
                                boundaryGap: false,
                                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                                axisLabel: {
                                    color: '#eee'
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
                                    data: [120, 132, 101, 134, 90, 230, 210]
                                },
                                {
                                    name: 'recovered',
                                    type: 'line',
                                    color: 'green',
                                    data: [220, 182, 191, 234, 290, 330, 310]
                                },
                                {
                                    name: 'deaths',
                                    type: 'line',
                                    color: 'dimgray',
                                    data: [150, 232, 201, 154, 190, 330, 410]
                                }
                            ]
                        };


                        var ctx = document.getElementById("scatter-plot");
                        var scatterPlot = echarts.init(document.getElementById('scatter-plot'));
                        scatterPlot.setOption(option);

                        var confirmed_count = document.getElementById("total-confirmed-count")
                        confirmed_count.innerHTML = total_confirmed

                        var death_count = document.getElementById("total-death-count")
                        death_count.innerHTML = total_death

                        var recovered_count = document.getElementById("total-recovered-count")  
                        recovered_count.innerHTML = total_recovered

                        var confirmed_changes = document.getElementById("total-confirmed-changes-count")
                        confirmed_changes.innerHTML = "+"+total_confirmed_changes

                        var death_changes = document.getElementById("total-death-changes-count")
                        death_changes.innerHTML = "+"+total_death_changes

                        var recovered_changes = document.getElementById("total-recovered-changes-count")  
                        recovered_changes.innerHTML = "+"+total_recovered_changes

                        // var mapChart = ec.init(document.getElementById('map'));
                        //mapChart.setOption(mapOption);
                        /*
                                var topfiveChart = echarts.init(document.getElementById('topfive-chart'));
                                topfiveChart.setOption(topfiveOption);

                                var pulauChart = echarts.init(document.getElementById('pulau-chart'));
                                pulauChart.setOption(pulauOption);
                        */
                        /*
                                var institutionChart = ec.init(document.getElementById('institution-chart'));
                                institutionChart.setOption(institutionOption);*/


                    
                });
            
        });
});