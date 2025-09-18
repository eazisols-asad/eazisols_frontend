"use client";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { Container } from "react-bootstrap";
const timeData = [
  { name: "Our Team", value: "80x" },
  { name: "No Code Agency", value: "130x" },
  { name: "Traditional Agency", value: "100x" },
  { name: "In-House Team", value: "200x" },
];
const scalabilityData = [
  { name: "Our Team", value: "250,000 Users" },
  { name: "No Code Agency", value: "50,000 Users" },
  { name: "Traditional Agency", value: "100,000 Users" },
  { name: "In-House Team", value: "150,000 Users" },
];
const pricingData = [
  { name: "Our Team", value: "$50k" },
  { name: "No Code Agency", value: "$30k" },
  { name: "Traditional Agency", value: "$80k" },
  { name: "In-House Team", value: "$120k" },
];
export default function BarChart() {
  const timeValues = timeData.map((d) => parseFloat(d.value.replace("x", "")));
  const pricingValues = pricingData.map((d) =>
    parseFloat(d.value.replace("$", "").replace("k", ""))
  );
  const scalabilityValues = scalabilityData.map((d) =>
    parseFloat(d.value.replace(/,/g, "").replace(" Users", "")) / 1000
  );
  const options = {
    chart: { type: "bar" },
    title: {
      text: "Who is the right technology partner for you?",
    },
    subtitle: { text: "Comparison of Time, Pricing, and Scalability" },
    xAxis: {
      categories: ["Our Team", "No Code Agency", "Traditional Agency", "In-House Team"],
      title: { text: null },
      gridLineWidth: 1,
      lineWidth: 0,
    },
    yAxis: {
      min: 0,
      title: { text: "Relative Comparison", align: "high" },
      labels: { overflow: "justify" },
      gridLineWidth: 0,
    },
    tooltip: {
      formatter: function () {
        if (this.series.name === "Time") return `<b>${this.x}</b>: ${timeData[this.point.index].value}`;
        if (this.series.name === "Pricing") return `<b>${this.x}</b>: ${pricingData[this.point.index].value}`;
        if (this.series.name === "Scalability") return `<b>${this.x}</b>: ${scalabilityData[this.point.index].value}`;
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        dataLabels: {
          enabled: true,
          formatter: function () {
            if (this.series.name === "Time") return timeData[this.point.index].value;
            if (this.series.name === "Pricing") return pricingData[this.point.index].value;
            if (this.series.name === "Scalability") return scalabilityData[this.point.index].value;
          },
        },
        groupPadding: 0.1,
      },
    },
    legend: {
      layout: "vertical",
      align: "right",
      verticalAlign: "middle",
      floating: false,
      backgroundColor: "#FFFFFF",
      borderColor: "#ccc",
      borderWidth: 1,
      shadow: true,
      itemStyle: { fontWeight: "500", fontSize: "14px" },
    },
    credits: { enabled: false },
    series: [
      { name: "Time", data: timeValues, color: "#0EA5E9" },
      { name: "Pricing", data: pricingValues, color: "#333333" },
      { name: "Scalability", data: scalabilityValues, color: "#eb3621ff" },
    ],
  };
  return (
    <>
    <Container>
     <div className="text-center mb-5">
          <p className="text-uppercase text-muted mb-1">COMPARISON</p>
          <h2 className="display-6 fw-bold mb-3">Who is the right technology partner<br />for you?</h2>
          <p className="lead text-muted" style={{fontSize:"16px",}}>
            Choosing the right technology partner doesn't only influence your SaaS product -<br />
             it shapes your entire business. We're here to help you make the right choice.
          </p>
        </div>
    <div style={{ maxWidth: "1000px",maxHeight:"900px", margin: "10px auto", border: "1px solid #827d7dff" }} >
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
    </Container>
    </>
  );
}



































// "use client";

// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const timeData = [
//   { name: "Our Team", value: "1.8x" },
//   { name: "No Code Agency", value: "1x" },
//   { name: "Traditional Agency", value: "5.7x" },
//   { name: "In-House Team", value: "7.2x" },
// ];

// const scalabilityData = [
//   { name: "Our Team", value: "250,000 Users" },
//   { name: "No Code Agency", value: "50,000 Users" },
//   { name: "Traditional Agency", value: "100,000 Users" },
//   { name: "In-House Team", value: "150,000 Users" },
// ];

// const pricingData = [
//   { name: "Our Team", value: "$50k" },
//   { name: "No Code Agency", value: "$30k" },
//   { name: "Traditional Agency", value: "$80k" },
//   { name: "In-House Team", value: "$120k" },
// ];

// export default function BarChart() {
//   // ✅ Convert string values to numbers (for chart)
//   const timeValues = timeData.map((d) => parseFloat(d.value.replace("x", "")));
//   const pricingValues = pricingData.map((d) =>
//     parseFloat(d.value.replace("$", "").replace("k", ""))
//   );
//   const scalabilityValues = scalabilityData.map((d) =>
//     parseFloat(d.value.replace(/,/g, "").replace(" Users", "")) / 1000
//   );

//   const options = {
//     chart: {
//       type: "bar",
//     },
//     title: {
//       text: "Who is the right technology partner for you ?",
//     },
//     subtitle: {
//       text: "text here",
//     },
//     xAxis: {
//       categories: ["Our Team", "No Code Agency", "Traditional Agency", "In-House Team"],
//       title: {
//         text: null,
//       },
//       gridLineWidth: 1,
//       lineWidth: 0,
//     },
//     yAxis: {
//       min: 0,
//       title: {
//         text: "Population (millions)", // 👈 Aap ka original text hi rakha h
//         align: "high",
//       },
//       labels: {
//         overflow: "justify",
//       },
//       gridLineWidth: 0,
//     },
//     tooltip: {
//       // ✅ Show original values in tooltip
//       formatter: function () {
//         if (this.series.name === "Time") return `<b>${timeData[this.point.index].name}</b>: ${timeData[this.point.index].value}`;
//         if (this.series.name === "Pricing") return `<b>${pricingData[this.point.index].name}</b>: ${pricingData[this.point.index].value}`;
//         if (this.series.name === "Scalability") return `<b>${scalabilityData[this.point.index].name}</b>: ${scalabilityData[this.point.index].value}`;
//       },
//     },
//     plotOptions: {
//       bar: {
//         borderRadius: "50%",
//         dataLabels: {
//           enabled: true,
//           // ✅ Show original values on bar
//           formatter: function () {
//             if (this.series.name === "Time") return timeData[this.point.index].value;
//             if (this.series.name === "Pricing") return pricingData[this.point.index].value;
//             if (this.series.name === "Scalability") return scalabilityData[this.point.index].value;
//           },
//         },
//         groupPadding: 0.1,
//       },
//     },
//     legend: {
//       layout: "vertical",
//       align: "right",
//       verticalAlign: "top",
//       x: -40,
//       y: 80,
//       floating: true,
//       borderWidth: 1,
//       backgroundColor: "var(--highcharts-background-color, #ffffff)",
//       shadow: true,
//     },
//     credits: {
//       enabled: false,
//     },
//     series: [
//       {
//         name: "Time",
//         data: timeValues, // ✅ replaced with dynamic values
//       },
//       {
//         name: "Pricing",
//         data: pricingValues, // ✅ replaced with dynamic values
//       },
//       {
//         name: "Scalability",
//         data: scalabilityValues, // ✅ replaced with dynamic values
//       },
//     ],
//   };

//   return (
//     <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//       <HighchartsReact highcharts={Highcharts} options={options} />
//     </div>
//   );
// }
