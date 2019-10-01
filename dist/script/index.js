const concept_links_id = [
    "functions", "partials", "nesting", "variable"];

const articles = {
    variable : {
        code:`
            $primary-color: #fccd33;<br />
            $regular-size: 18px;<br /><br />
            
            p {<br />
                &ensp;&ensp;color: $primary-color;<br />
                &ensp;&ensp;font-size: $regular-size;<br />
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
        code : `
             @function get_value($value) { <br />
                 &ensp;&ensp;@return map-get($map_object, $value); <br/>
             } <br/> <br />
        `,
        writeup: `
        i'm glad to inform you that functions in sass behaves like function
        in programming languages, the only difference is in the syntax.
        <br/>
        The displayed code helps to retrieve a distinct value from a map 
        object (you can read more on map) using the argument ($value) 
        passed in the function.
        `
    },

    partials: {
        code: `
        // (variable module) named <br />
        // _variables.scss file <br/>

        $primary-color: #fcc3ee; <br/>
        $regular-font: 18px;<br/>

        <br/>
        // main.scss<br/>
        @import "./path/to/varibles";<br/>

        body {<br/>

            &ensp;&ensp;background: $primary-color; <br/>
            &ensp;&ensp;font-size: $regular-font; </br>
            
        }<br/>
        `,
        writeup: `
        Partials in sass are identical to modules, which helps to structure
        code base and aids keeping of identical code in thier distinct files.
        <br />
        Partials are the sole drive for separation of concern in sass, which
        allows developer to focus on a specific development phase in a project.
        <br />
        It should be noted that partils filed should be named with a leading
        underscore. e.g a partial file to be called 'variable', will be saved
        with '_variable' and also, when importing partials, the leading underscore
        and the extension are not needed.
        `
    },

    nesting: {
        code: `
        .nav { <br /> &ensp;&ensp;
            background: #fcc3dd; <br /> &ensp;&ensp;
            padding: 18px; <br /> 
            
            <br /> &ensp;&ensp;
            #{&}__heading { <br />
                &ensp;&ensp;&ensp;&ensp;font-weight: 400; <br />
                &ensp;&ensp;&ensp;&ensp;color: #33ffcc; <br />&ensp;&ensp;
            } <br />
            
            <br />&ensp;&ensp;
            #{&}__motto {    <br /> 
                &ensp;&ensp;&ensp;&ensp;font-size: 16px; <br />&ensp;&ensp;
            } <br />
        } <br />
        `,
        writeup: `
            The beauty of writing HTML is in it's nesting ability, which
            help to create a parent and child relationship in markups. 
            This same functionality is a core feature in sass and it 
            doesn't just allows for parent -- child relationship, but
            when used properly, can enable the creation of components 
            on HTML. 
        `
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