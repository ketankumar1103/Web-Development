console.log(`News Website Project using JavaScript.`);

// Initialize the new api parameters
let source = 'newsapi.org';
let apiKey = 'ab7549eb21d34c6f8445e51fa266e1d9';

// Grab the news Container
let newsAccordian = document.getElementById('newsAccordian');

// Creating an ajax get request via xhr
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://${source}/v2/top-headlines?country=us&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                                        <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse show" aria-labelledby="heading${index}"
                                data-parent="#newsAccordian">
                                <div class="card-body"> ${element["content"]}. <a href="${element['url']}" target="_blank">Read more
                                        here</a> </div>
                            </div>
                        </div>`
            newsHtml +=news;
        });
        newsAccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
