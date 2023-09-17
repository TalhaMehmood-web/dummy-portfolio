const projects = [{
    img: "./img/project1.png",
    title: "DESIGN PORTFOLIO",
    type: `HTML ${" "} CSS`

},
{
    img: "./img/project2.png",
    title: "E-LEARNING LANDING PAGE",
    type: `HTML ${" "} CSS`

},
{
    img: "./img/project3.png",
    title: "TODO WEB APP",
    type: `HTML ${" "} CSS ${" "} JAVASCRIPT`

},
{
    img: "./img/project4.png",
    title: "ENTERTAINMENT WEB APP",
    type: `HTML ${" "} CSS ${" "} JAVASCRIPT`

},
{
    img: "./img/project5.png",
    title: "MEMORY GAME",
    type: `HTML ${" "} CSS ${" "} JAVASCRIPT`

},
{
    img: "./img/project6.png",
    title: "ART GALLERY SHOWCASE",
    type: `HTML ${" "} CSS ${" "} JAVASCRIPT`

}
];
let projectsHTML = "";
projects.forEach(project => {
    projectsHTML += `
 <div class="grid-item">     
<div class="project-img">
<img src=${project.img} alt="">
</div>
<div class="project-title">
<p>${project.title}</p>
</div>
<div class="project-type dullBlack">
<p>${project.type}</p>
</div>
</div>`
})
console.log(projectsHTML)
document.querySelector(".project-container").innerHTML = projectsHTML;