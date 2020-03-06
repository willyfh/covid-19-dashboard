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
        if (elements[i].indexOf(quotes) >= 0) {//the left double quotes is found  
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
            }  
            else { //right double quotes is not found  
                newElements.push(elements[i]);  
            }  
        }  
        else {//no left double quotes is found  
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
    var coord = {}
    var max = 0
    //var headings = entries.splice(0,record_num);
    while (allTextLines.length>0) {
        entries =  splitCSVButIgnoreCommasInDoublequotes(allTextLines[0])
        while (entries.length>0) {
            var tarr = [];
            var prov = entries.shift()
            if (prov == undefined || prov == '') {
                prov = ''
            }else {
                prov = prov.replace(/['"]+/g, '')+" - "
            }
            var cnt = entries.shift()
            if (cnt == undefined) {
                cnt = ''
            }else{
                cnt = cnt.replace(/['"]+/g, '')
            }
            var  _name = prov + cnt 
            var loc = []
            loc.unshift(parseFloat(entries.shift()))
            loc.unshift(parseFloat(entries.shift()))
            var sum = 0.0
            for (var j=4; j<record_num; j++) {
                num = parseFloat(entries.shift())
                if (Number.isNaN(num) == false){
                    sum = num;
                }
            }
            if (sum > max){
                max = sum
            }
            if (!Number.isNaN(loc[0]) && !Number.isNaN(loc[1])) {
                dat.push({name: _name, value:sum})
                coord[_name] = loc
            }
        }
        allTextLines.shift()
    }
    return [dat, coord, max]
    
};

var convertData = function (data, geoCoordMap) {
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
    console.log(res)
    return res;
};
url = "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv"
$.ajax({
    type: "GET",
    url: url,
    dataType: "text",
    success: function(data) {
		var values = processData(data);
		var data = values[0]
		var geoCoordMap = values[1]
        var max = values[2]
        console.log(data)
        console.log(geoCoordMap)


        var mapOption = {
            backgroundColor: '#111',
            title : {
                text: '',
                subtextStyle : {
                    fontFamily : "'Lora', serif",
        			color :'#333'
                }
            },
            tooltip : {
                trigger: 'item',
                showDelay: 0,
                transitionDuration: 0.2,
        	
                formatter : function (params) {
                    var value = (params.value[2] + ' SR');
        			if (params.value=='-'){
        				return '-';
        			}else{
        				return "Location: "+params.name + '<br/>Total : ' + value;
        			}
                }
            },
            dataRange: {
        	    
                x : 'right',
                y : 'top',
                min: 0.0,
                max: max,
        		precision:1,
        		formatter : function(v, v2){
                    return v + " SR - "+v2+" SR"
                },
        		
        		selectedMode:true,
        		hoverLink : true,
        		realtime : true,
        		splitNumber : 4,
                color: ['darkred','red','orange','yellow'],

               //text:['8.0 SR','4.0 SR'],
        		
                calculable : false,
                textStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
            visualMap: {
                show: false,
                min: 0,
                max: max,
                inRange: {
                    symbolSize: [6, 60]
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
            series : [
                {
                    name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data, geoCoordMap),
                    symbolSize: function (v){
        					return Math.sqrt(v[2])
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
                }/*,
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(data.sort(function (a, b) {
                        return b.value - a.value;
                    }).slice(0, 6), geoCoordMap),
                    symbolSize: function (v){
        					return Math.sqrt(v[2])
                        },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#f4e925',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1
                }*/
            ]
        };
        /*
        var topfiveOption = {
            title : {
                text: 'Lima Kasus Gempa Terbesar',
                subtext: 'Tahun 2014',
                textStyle : {
                    fontFamily : "'Lora', serif",
        			
                },
                subtextStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
            tooltip : {
                trigger: 'item',
        		formatter : function (params) {
                    var value = (params.value + ' SR');
                    return params.name + '<br/>' + value;
                },
                axisPointer : { 
                    type : 'shadow'
                },
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01],
                    axisLabel : {
                        textStyle : {
                            fontFamily : "'Lora', serif",
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color : 'dimgray'
                        }
                    },
                    axisTick : {
                        show : false
                    }
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['104 km \nBaratDaya \nKEBUMEN-\nJATENG','115 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT','135 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT','137 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT','132 km \nBaratLaut \nHALMAHERA\nBARAT-MALUT'],
                    axisLabel : {
                        textStyle : {
                            fontFamily : "'Lora', serif",
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color : 'dimgray'
                        }
                    },
                    axisTick : {
                        show : false
                    }
               }
            ],
            grid : {
                x : 100,
                x2 : 20,
            },
            series : [
                {
                    type:'bar',
                   data:[6.5,6.7,6.8,7.3,7.3],
                    itemStyle: {
                        normal:{color:'darkred'}
                    },
                }
            ]
        };

        var pulauOption = {
            title : {
                text: 'Jumlah Kasus Gempa Tiap Pulau',
                subtext: 'Tahun 2014',
                textStyle : {
                    fontFamily : "'Lora', serif",
                },
                subtextStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
               tooltip : {
                trigger: 'item',
        		formatter : function (params) {
                    var value = (params.value);
                    return params.name + '<br/>' + value;
                },
                axisPointer : { 
                    type : 'shadow'
                },
            },
          
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01],
                    axisLabel : {
                        textStyle : {
                            fontFamily : "'Lora', serif",
                        }
                    },
        			
                    axisLine : {
                        lineStyle : {
                            color : 'dimgray'
                        }
                    },
                    axisTick : {
                        show : false
                    }
                    
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['Kalimantan','NTT-NTB','Jawa','Papua','Sulawesi','Sumatera','Maluku'],
                    axisLabel : {
                        textStyle : {
                            fontFamily : "'Lora', serif",
                        }
                    },
                    axisLine : {
                        lineStyle : {
                            color : 'dimgray'
                        }
                    },
                    axisTick : {
                        show : false
                    }
        			
               }
            ],
            grid : {
                x : 100,
                x2 : 20,
            },
            series : [
                {
                    type:'bar',
                    data:[0,8,18,20,36,48,71],
        			
                    itemStyle: {
                        normal:{color:'darkred'}
                    },
                }
            ]
        };*/
        /*
        var institutionOption = {
            title : {
                text: 'Kasus Korupsi Berdasarkan Instansi',
                subtext: 'Jumlah Kasus Pada Semester I 2014',
                textStyle : {
                    fontFamily : "'Lora', serif",
                },
                subtextStyle : {
                    fontFamily : "'Lora', serif",
                }
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : { 
                    type : 'shadow'
                },
            },
            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'value',
                    boundaryGap : [0, 0.01],
                    axisLabel : {
                        textStyle : {
                            fontFamily : "'Lora', serif",
                        }
                    }
                }
            ],
            yAxis : [
                {
                    type : 'category',
                    data : ['Pajak','KY','Bank','Koperasi','Dispenda','Dinperindag','PNPM','Bappeda','BUMD','Disnakertrans','Penegak\nHukum','Kesehatan','Dinas\n(lain-lain)','Non\nPemerintah','Kelautan\ndan Perikanan','Dinas\nKesehatan','Dishubkominfo','Pendidikan','BUMN','ESDM','Badan\nPemerintahan','Dinas\nPendidikan','Kementrian','DPU','DPRD','Pemda'],
                    axisLabel : {
                        textStyle : {
                            fontFamily : "'Lora', serif",
                        }
                    }
               }
            ],
            grid : {
                x : 100,
                x2 : 20,
            },
            series : [
                {
                    //name:'2011年',
                    type:'bar',
                    data:[1,1,2,2,3,3,3,4,4,4,4,5,6,7,8,8,9,13,13,14,18,19,19,20,21,97],
                    itemStyle: {
                        normal:{color:'indianred'}
                    },
                }
            ]
        };*/



        // option = {
        //     backgroundColor: '#404a59',
        //     title : {
        //         text: 'World Population (2011)',
        //         subtext: 'From Gapminder',
        //         left: 'center',
        //         top: 'top',
        //         textStyle: {
        //             color: '#fff'
        //         }
        //     },
        //     tooltip : {
        //         trigger: 'item',
        //         formatter : function (params) {
        //             var value = (params.value + '').split('.');
        //             value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
        //                     + '.' + value[1];
        //             return params.seriesName + '<br/>' + params.name + ' : ' + value;
        //         }
        //     },
        //     visualMap: {
        //         show: false,
        //         min: 0,
        //         max: max,
        //         inRange: {
        //             symbolSize: [6, 60]
        //         }
        //     },
        //     geo: {
        //         name: 'World Population (2010)',
        //         type: 'map',
        //         map: 'world',
        //         roam: true,
        //         label: {
        //             emphasis: {
        //                 show: false
        //             }
        //         },
        //         itemStyle: {
        //             normal: {
        //                 areaColor: '#323c48',
        //                 borderColor: '#111'
        //             },
        //             emphasis: {
        //                 areaColor: '#2a333d'
        //             }
        //         }
        //     },
        //     series : [
        //         {
        //             type: 'scatter',
        //             coordinateSystem: 'geo',
        //             data: mapData.map(function (itemOpt) {
        //                 return {
        //                     name: itemOpt.name,
        //                     value: [
        //                         latlong[itemOpt.code].longitude,
        //                         latlong[itemOpt.code].latitude,
        //                         itemOpt.value
        //                     ],
        //                     label: {
        //                         emphasis: {
        //                             position: 'right',
        //                             show: true
        //                         }
        //                     },
        //                     itemStyle: {
        //                         normal: {
        //                             color: itemOpt.color
        //                         }
        //                     }
        //                 };
        //             })
        //         }
        //     ]
        // };

    		
		$.get('assets/js/geojson.json', function (geoJson) {

			echarts.registerMap('world', geoJson);
			var mapChart = echarts.init(document.getElementById('map'));
            mapChart.setOption(mapOption);
		});

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


	}
});