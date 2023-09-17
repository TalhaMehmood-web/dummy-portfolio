const listData = [{


    header: "HTML",
    title: "4 Years Experience"
},
{
    header: "CSS",
    title: "4 Years Experience"
},
{
    header: "JavaScript",
    title: "4 Years Experience"
},
{
    header: "Accessibility",
    title: "4 Years Experience"
},
{
    header: "React",
    title: "3 Years Experience"
},
{
    header: "Sass",
    title: "3 Years Experience"
}

];
let listHTML = " ";
listData.forEach(list => {
    listHTML += `    <div class="skillItem">
    <div class="skillHeader">
        <p>${list.header}</p>
    </div>
    <div class="experience dullBlack">
        <p>${list.title}</p>
    </div>
</div>`

})
document.querySelector(".skillList").innerHTML = listHTML
// console.log(listHTML);
