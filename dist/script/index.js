const concept_links_id = [
    "functions", "partials", "nesting", "variable"];

const articles = {
    variable : {
        code:`
            $primary-color: #fccd33;<br />
            $regular-size: 18px;<br /><br />
            
            p {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;color: $primary-color;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;font-size: $regular-size;<br />
            }<br /><br />
        `,
        writeup: `
            variables are like container that holds a value for later usage.
            sass' variables are compatible with all browsers, as it passes
            the initial value assigned/stored in it during compilation.
            <br />
            The displayed code sample show a quick and non exhaustive way a 
            variable is used in sass to set color and font-size of a paragraph
            element.
        `
    },

    functions: {
        code : ``,
        writeup: ``
    },

    partials: {
        code: ``,
        writeup: ``
    },

    nesting: {
        code: ``,
        writeup: ``
    }
}

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
    handleArticleContentChange(src);
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
    let link = concept_links_id.filter(link => link === article_heading);
    document.getElementById(link).classList.remove('active');
    
    src.classList.add('active');
}


const handleArticleContentChange = (src) => {
    let article = articles[src.id]
    document.querySelector('code').innerHTML = article.code;
    document.querySelector(".article__content").innerHTML = article.writeup;
}