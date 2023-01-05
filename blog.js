const blog = [
    {
        index: 0,
        image: "./images/blog10.jpg",
        title: "Title Blog 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic culpa quas, amet maxime facere praesentium ipsa temporibus rem explicabo adipisci tempora nostrum consectetur veritatis error suscipit iste corporis voluptatum."
        
    },
    {
        index: 1,
        image: "./images/blog20.jpg",
        title: "Title Blog 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic culpa quas, amet maxime facere praesentium ipsa temporibus rem explicabo adipisci tempora nostrum consectetur veritatis error suscipit iste corporis voluptatum."
    },
    {
        index: 2,
        image: "./images/blog3.jpg",
        title: "Title Blog 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic culpa quas, amet maxime facere praesentium ipsa temporibus rem explicabo adipisci tempora nostrum consectetur veritatis error suscipit iste corporis voluptatum."
    }
]

localStorage.setItem('Blog', JSON.stringify(blog));

function blogData(id){
    const data = JSON.parse(localStorage.getItem('Blog') || '[]');

    document.querySelector('.blog-overlay').classList.add('active');

    document.querySelector('.blog-display').innerHTML = `
        <img src=${data[id].image}>
        <h2>${data[id].title}</h2>
        <p>${data[id].description}</p>
    `;
}

document.querySelector('.close').addEventListener('click', ()=>{
    document.querySelector('.blog-overlay.active').classList.remove('active');
})