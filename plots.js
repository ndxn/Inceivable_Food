// Initial function for webpage
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

// Function for selection from dropdown menu. Starts buildMetadata() and buildCharts() functions
function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
    }

// Function for displaying metadata (Mod 12 work)
function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        var result = resultArray[0];
        var PANEL = d3.select("#sample-metadata");
  
        PANEL.html("");
        Object.entries(result).forEach(([key, value]) => {
            PANEL.append("h6").text(key.toUpperCase() + ': ' + value);
        }); 
    });
};

function buildCharts(sample) {
    // Initialize and populate variables for charts using D3
    d3.json("samples.json").then((data) => {
        var samp = data.samples;
        var sampArray = samp.filter(sampObj => sampObj.id == sample);
        var sampList = sampArray[0];
        var topOtuIds = sampList.otu_ids.slice(0,10).map(item => 'OTU: '+item);
        var topSampValues = sampList.sample_values.slice(0,10);
        var topOtuLabels = sampList.otu_labels.slice(0,10);
        var otuIds = sampList.otu_ids;
        var sampValues = sampList.sample_values;
        var otuLabels = sampList.otu_labels;

        // Build and set parameters for bar chart
        var traceBar = [{
            x: topSampValues.reverse(),
            y: topOtuIds.reverse(),
            type: "bar",
            text: topOtuLabels,
            orientation: 'h'
        }];
        var layoutBar = {
            title: "Top 10 OTUs",
            paper_bgcolor: '#f6f6f6'
        };

        console.log(otuIds);

        // Build and set parameters for bubble chart
        var traceBubble = [{
            x: otuIds,
            y: sampValues,
            mode: 'markers',
            marker:{
                size: sampValues,
                color: otuIds
            },
            labels: otuLabels        
        }];
        var layoutBubble = {
            xaxis: {title: "OTU ID"},
            paper_bgcolor: '#f6f6f6'
        };

        // Build and set parameters for gauge
        // INSERT GAUGE FUNCTION HERE
        
        // Output Plotly charts
        Plotly.newPlot('bar', traceBar, layoutBar);
        Plotly.newPlot("bubble", traceBubble, layoutBubble);
        // Plotly.newPlot('gauge', traceGauge, layoutGauge);
    })

    
};
