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
    handleArticleHeaderChange(src);
}

const handleArticleHeaderChange = (src) => {
    document.querySelector(".article__heading").textContent = src.innerText;
}