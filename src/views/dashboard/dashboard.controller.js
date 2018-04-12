(function () {
    "use strict";
    angular
      .module('layout.dashboard')
      .controller('DashboardLayoutController', ['$scope', '$compile', 'FileSaver', 'Blob', DashboardLayoutController]);

      function DashboardLayoutController($scope, $compile, FileSaver, Blob){
          var vm = this;

          // GENERAL SETTINGS FOR EVERY CHART
          vm.title = ['Chart Title'];
          vm.labels = ['January', 'February', 'March', 'April', 'May', 'June'];
          vm.series = ['Series A', 'Series B', 'Series C', 'Series D', 'Series E'];
          vm.colors = ['#57AFA4', '#AA4465', '#CCB25D', , '#9EB25D', '#EEFCCE'];
          vm.data = [ [65, 59, 80, 81, 56, 55], [28, 48, 40, 19, 86, 27], [], [], [] ];
          vm.switch = false;


          // GRABBING IDs TO INJECT LATER
          var lineChartId = angular.element(document.querySelector('#line-chart'));
          var compiledLineHTML = $compile('<line-chart-component data="vm.data" title="vm.title" options-line-chart="vm.optionsLineChart" series="vm.series" labels="vm.labels" colors="vm.colors"></line-chart-component>')($scope);

          var barChartId = angular.element(document.querySelector('#bar-chart'));
          var compiledBarHTML = $compile('<bar-chart-component data="vm.data" title="vm.title" options-bar-chart="vm.optionsBarChart" series="vm.series" labels="vm.labels" colors="vm.colors"></bar-chart-component>')($scope);

          var pieChartId = angular.element(document.querySelector('#pie-chart'));
          var compiledPieHTML = $compile('<pie-chart-component data="vm.data" title="vm.title" options-pie-chart="vm.optionsPieChart" series="vm.series" labels="vm.labels" colors="vm.colors"></pie-chart-component>')($scope);

          var radarChartId = angular.element(document.querySelector('#radar-chart'));
          var compiledRadarHTML = $compile('<radar-chart-component data="vm.data" title="vm.title" options-radar-chart="vm.optionsRadarChart" series="vm.series" labels="vm.labels" colors="vm.colors"></radar-chart-component>')($scope);


          // LINE CHART OPTIONS
          vm.lineChart = function(){
            console.log('vm.lineChart function selected');
            lineChartId.append(compiledLineHTML);
            $("#starter-line-chart").remove();
            compiledBarHTML.remove();
            compiledPieHTML.remove();
            compiledRadarHTML.remove();

            vm.exportPng = function(img) {
              console.log('export png clicked - line chart');
              var lineChartCanvas = angular.element(document.querySelector('#lineChartCanvas'))[0];
                lineChartCanvas.toBlob(function(blob){
                  FileSaver.saveAs(blob, 'line-chart.png');
                });
            };
          }

          vm.optionsLineChart = {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: true,
                  color:'#808080',
                  lineWidth: .20,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Category',
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  fontSize: 16,
                  padding: 15
                },
                ticks: {
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  padding: 8
                }
              }],
              yAxes: [{
                gridLines: {
                  display: true,
                  color:'#808080',
                  lineWidth: .20
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Data',
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  fontSize: 16,
                  padding: 15
                },
                ticks: {
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  padding: 8
                }
              }]
            }
          }


          // BAR CHART OPTIONS
          vm.barChart = function(){
            console.log('vm.barChart function selected');

            barChartId.append(compiledBarHTML);
            $("#starter-line-chart").remove();
            compiledLineHTML.remove();
            compiledPieHTML.remove();
            compiledRadarHTML.remove();

            vm.exportPng = function(img) {
              console.log('export png clicked - bar chart');
              var barChartCanvas = angular.element(document.querySelector('#barChartCanvas'))[0];
                barChartCanvas.toBlob(function(blob){
                  FileSaver.saveAs(blob, 'bar-chart.png');
                });
            };
          }

          vm.optionsBarChart = {
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                gridLines: {
                  display: true,
                  color:'#808080',
                  lineWidth: .20,
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Category',
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  fontSize: 16,
                  padding: 15
                },
                ticks: {
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  padding: 8
                }
              }],
              yAxes: [{
                gridLines: {
                  display: true,
                  color:'#808080',
                  lineWidth: .20
                },
                scaleLabel: {
                  display: true,
                  labelString: 'Data',
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  fontSize: 16,
                  padding: 15
                },
                ticks: {
                  fontFamily: 'Lato',
                  fontColor: '#808080',
                  padding: 8
                }
              }]
            }
          }


          // PIE CHART OPTIONS
          vm.pieChart = function(){
            console.log('vm.pieChart function selected');

            pieChartId.append(compiledPieHTML);
            $("#starter-line-chart").remove();
            compiledLineHTML.remove();
            compiledBarHTML.remove();
            compiledRadarHTML.remove();

            vm.exportPng = function(img) {
              console.log('export png clicked - pie chart');
              var pieChartCanvas = angular.element(document.querySelector('#pieChartCanvas'))[0];
                pieChartCanvas.toBlob(function(blob){
                  FileSaver.saveAs(blob, 'pie-chart.png');
                });
            };
          }

          vm.optionsPieChart = {
            legend: {
              display: false
            }
          }


          // RADAR CHART OPTIONS
          vm.radarChart = function(){
            console.log('vm.radarChart function selected');

            radarChartId.append(compiledRadarHTML);
            $("#starter-line-chart").remove();
            compiledLineHTML.remove();
            compiledBarHTML.remove();
            compiledPieHTML.remove();

            vm.exportPng = function(img) {
              console.log('export png clicked - radar chart');
              var radarChartCanvas = angular.element(document.querySelector('#radarChartCanvas'))[0];
                radarChartCanvas.toBlob(function(blob){
                  FileSaver.saveAs(blob, 'radar-chart.png');
                });
            };
          }

          vm.optionsRadarChart = {
            legend: {
              display: false,
              position: 'bottom',
              labels: {
                fontFamily: 'Lato',
                fontColor: '#808080',
                padding: 40
              }
            },
            scale: {
              gridLines: {
                display: true,
                color:'#808080',
                lineWidth: .20
              },
              angleLines: {
                display: true,
                color:'#808080',
                lineWidth: .20
              },
              ticks: {
                backdropColor: "transparent",
                fontFamily: 'Lato',
                fontColor: '#808080'
              },
              pointLabels: {
                display: true,
                fontFamily: 'Lato',
                fontColor: '#808080',
                fontSize: 12
              }
            }
          }


          // DROPDOWN FUNCTIONALITY
          $('.dropdown-toggle').dropdown();
          $('#graph-type li').on('click', function() {
            $('#dropdown-graph').html($(this).find('a').html());
          });
          $('#color-theme li').on('click', function() {
            $('#dropdown-theme').html($(this).find('a').html());
          });


          // EXPORT PNG ONLOAD
          vm.exportPng = function(img) {
            console.log('export png clicked - line chart');
            var lineChartCanvas = angular.element(document.querySelector('#lineChartCanvas'))[0];
              lineChartCanvas.toBlob(function(blob){
                FileSaver.saveAs(blob, 'line-chart.png');
              });
          };


          // CHANGES TO DARK THEME
          vm.darkTheme = function() {
            console.log('hey dark theme - default');
            var dashboard = angular.element(document.querySelector('#dashboard'));
            vm.colors = ['#57AFA4', '#AA4465', '#CCB25D', , '#9EB25D', '#EEFCCE'];
            dashboard.addClass('canvas-dark-theme');
            dashboard.removeClass('canvas-light-theme');
          }


          // CHANGES TO LIGHT THEME
          vm.lightTheme = function() {
            console.log('hey light theme');
            var dashboard = angular.element(document.querySelector('#dashboard'));
            vm.colors = ['#57AFA4', '#AA4465', '#CCB25D', , '#9EB25D', '#EEFCCE'];
            dashboard.addClass('canvas-light-theme');
            dashboard.removeClass('canvas-dark-theme');
          }


          // TOGGLE LEGEND SWITCH
          vm.toggleLegend = function() {
            vm.switch = !vm.switch;
            if (vm.switch == true) {
              console.log('hey true:', vm.switch);

              vm.optionsLineChart = {
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    fontFamily: 'Lato',
                    fontColor: '#808080'
                  }
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                      display: true,
                      color:'#808080',
                      lineWidth: .20,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Category',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }],
                  yAxes: [{
                    gridLines: {
                      display: true,
                      color:'#808080',
                      lineWidth: .20
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Data',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }]
                }
              }

              vm.optionsBarChart = {
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    fontFamily: 'Lato',
                    fontColor: '#808080'
                  }
                },
                scales: {
                  xAxes: [{
                    scaleLabel: {
                      display: true,
                      labelString: 'Category',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }],
                  yAxes: [{
                    gridLines: {
                      display: true,
                      color:'#808080',
                      lineWidth: .20
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Data',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }]
                }
              }

              vm.optionsPieChart = {
                legend: {
                  display: false
                }
              }

              vm.optionsRadarChart = {
                legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                    fontFamily: 'Lato',
                    fontColor: '#808080',
                    padding: 40
                  }
                },
                scale: {
                  gridLines: {
                    display: true,
                    color:'#808080',
                    lineWidth: .20
                  },
                  angleLines: {
                    display: true,
                    color:'#808080',
                    lineWidth: .20
                  },
                  ticks: {
                    backdropColor: "transparent",
                    fontFamily: 'Lato',
                    fontColor: '#808080'
                  },
                  pointLabels: {
                    display: true,
                    fontFamily: 'Lato',
                    fontColor: '#808080',
                    fontSize: 12
                  },
                }
              }

            } else if (vm.switch == false) {
              console.log('hey false:', vm.switch);
              vm.optionsLineChart = {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                      display: true,
                      color:'#808080',
                      lineWidth: .20,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Category',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }],
                  yAxes: [{
                    gridLines: {
                      display: true,
                      color:'#808080',
                      lineWidth: .20
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Data',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }]
                }
              }

              vm.optionsBarChart = {
                legend: {
                  display: false
                },
                scales: {
                  xAxes: [{
                    gridLines: {
                      display: true,
                      color:'#808080',
                      lineWidth: .20,
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Category',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }],
                  yAxes: [{
                    gridLines: {
                      display: true,
                      color:'#808080',
                      lineWidth: .20
                    },
                    scaleLabel: {
                      display: true,
                      labelString: 'Data',
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      fontSize: 16,
                      padding: 15
                    },
                    ticks: {
                      fontFamily: 'Lato',
                      fontColor: '#808080',
                      padding: 8
                    }
                  }]
                }
              }

              vm.optionsPieChart = {
                legend: {
                  display: false
                }
              }

              vm.optionsRadarChart = {
                legend: {
                  display: false,
                  position: 'bottom',
                  labels: {
                    fontFamily: 'Lato',
                    fontColor: '#808080',
                    padding: 40
                  }
                },
                scale: {
                  gridLines: {
                    display: true,
                    color:'#808080',
                    lineWidth: .20
                  },
                  angleLines: {
                    display: true,
                    color:'#808080',
                    lineWidth: .20
                  },
                  ticks: {
                    backdropColor: "transparent",
                    fontFamily: 'Lato',
                    fontColor: '#808080'
                  },
                  pointLabels: {
                    display: true,
                    fontFamily: 'Lato',
                    fontColor: '#808080',
                    fontSize: 12
                  },
                }
              }

            }
          } //-> toggleLegend() ends


      } //-> BlankLayoutController ends
}());
