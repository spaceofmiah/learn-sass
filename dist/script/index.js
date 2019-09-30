const concept_links_id = [
    "functions", "partials", "nesting", "variable"];

concept_links_id.forEach(link => {
    // set event listener to all links
    let linkDomElement = document.getElementById(link);
    linkDomElement.addEventListener('click', function() {
        handler(this);
    });
});

const handler = (src) => {
    handleActiveLinkChange(src);
    handleArticleHeaderChange(src);
}

const handleArticleHeaderChange = (src) => {
    document.querySelector(".article__heading").textContent = src.innerText;
}

/**
 * this helps to remove an active class prop from concept_info links
 * @param {DOMElement} src dom element representing a link clicked
 */
const handleActiveLinkChange = (src) => {
    // since we have defined concept_info link ids as a predefined
    // list and an article header is just the link id in title case,
    // all we need do, is retrieve the current article heading and 
    // use it as an id in retrieving the concept_info link which will
    // enable us to remove the active class from it's class list.
    let article_heading = document.querySelector(".article__heading").textContent.toLowerCase();
    let article_link = document.getElementById(article_heading);
    article_link.classList.remove('active');

    src.classList.add('active');
}