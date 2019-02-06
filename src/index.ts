import dayjs from "dayjs";

const nu = dayjs();
const utc = dayjs(Date.UTC(2019, 1, 6, 14, 12, 12, 0));
var fromString = dayjs("2012-03-19T07:22Z");

document.getElementById("app-dayjs").innerHTML = `
${nu}<br/>
${nu.toString()}<br/>
${nu.toJSON().toString()}<br/><br/>
${nu.toLocaleString()}<br/><br/>

${nu.format("DD/MM/YYYY HH:mm:ss")}<br/><br/>

${utc}<br/>
${utc.toString()}<br/>
${utc.toJSON().toString()}<br/>
${utc.toLocaleString()}<br/><br/>

${utc.format("DD/MM/YYYY HH:mm:ss")}<br/><br/>

${fromString}<br/>
${fromString.toString()}<br/>
${fromString.toJSON().toString()}<br/><br/>

${fromString.format("DD/MM/YYYY HH:mm:ss")}<br/><br/>
`;
