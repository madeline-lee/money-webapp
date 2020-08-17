// https://github.com/saravananselvamohan/ReactD3

import React from 'react';
import * as d3 from 'd3';

class BarChart extends React.Component {
    componentDidMount() {
        this.drawChart();
    }
    componentDidUpdate() {
        this.drawChart();
    }

    drawChart() {
        var data = this.props.data
        const num_mth_map = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        // set the dimensions and margins of the graph
        var margin = { top: 30, right: 30, bottom: 70, left: 60 },
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        d3.select("#" + this.props.id).selectAll("svg").remove();
        // append the svg object to the body of the page
        var svg = d3.select("#" + this.props.id)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        // X axis
        var x = d3.scaleBand()
            .range([0, width])
            .domain(data.map(function (d) { return d.name; }))
            .padding(0.2);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))
            .selectAll("text")
            .attr("transform", "translate(-10,0)rotate(-45)")
            .style("text-anchor", "end");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain([0, Math.max.apply(Math, data.map(function(o) { return o.mobile; }))]) // https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
            .range([height, 0]);
        
            svg.append("g")
            .call(d3.axisLeft(y));

        // Bars
        svg.selectAll("mybar")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d) { return x(d.name); })
            .attr("y", function (d) { return y(d.mobile); })
            .attr("width", x.bandwidth())
            .attr("height", function (d) { return height - y(d.mobile); })
            .attr("fill", "#69b3a2")
    }

    render() {
        return <div id={this.props.id}></div>
    }
}


export default BarChart;