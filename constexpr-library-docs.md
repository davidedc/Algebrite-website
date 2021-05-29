Follows documentation from: https://fctorial.com/posts/constexpr.js.html


---


## What is constexpr?

Constexpr is a feature found in statically compiled programming languages that allows evaluation of expressions in a program at compile time. Different languages have different terminology for it. For example, in zig lang, it's called  comptime. Common lisp macros, in lisps that compile to native code, might also be grouped in this category.

This feature allows automatic generation of complex static data at compile time, and the runtime code can just use the result of compile time evaluated data. Variable inlining is a simple form of compile time evaluation.  
Ideally, the language/compiler should allow the users to turn any eligible piece of code "constexpr" with some annotations. The eligibility criteria being that the code must not depend on any runtime data.

## What is constexpr.js?

[constexpr.js](https://github.com/fctorial/ConstexprJS)  is a tool that allows you to execute parts of javascript in your website before deployment. You can use it like a static site generator, as I do for this website. It's different from SSG's like Jekyll in that it doesn't force you to learn a dedicated domain specific language. There already exists a dedicated languages for dealing with DOM and webpages, javascript. With constexpr.js, you use javascript and usual DOM manipulation methods to generate the website. The whole browser runtime is available at your disposal when generating sites with constexpr.js.

## Demo

This whole website is built using constexpr.js.

## How does it work?

The compiler renders the pages using chrome, and once they finish rendering, it saves the rendered state as new pages. It also strips out the javascript that was used for generating HTML, potentially reducing download size for the website users drastically. Any piece of javascript code that just generates some HTML can be made constexpr.

The generated pages don't have to be completely static. For example, disqus integration in [this](https://fctorial.com/raw/constexprjs_now/posts/up_and_running.html)  page.

The new website will look exactly like the original website after the pages finish rendering. This is one of the basic principles of constexpr.js. So you can build your website as usual and run the compiler once you're happy with the results, and you'll get a leaner, faster version of your website as output.

## How to use it?

You will have to divide the javascript being used in your page into two groups. Runtime javascript and compile time javascript, and annotate all compile time script tags withconstexpr  attribute:

    <script constexpr>
    ...
    </script>
    <script constexpr src="/generate_page.js"></script>

Runtime code must not depend on the compile time code, since that code will be stripped out before writing the output file. See  [this guide](https://fctorial.com/posts/runtime_compiletime_constexpr.js.html)  for code organization tips for constexpr.js.

Once the HTML generation code has finished rendering, it must call the  `window._ConstexprJS_.compile()`  function. This function is injected into the page by the compiler.

The compiler can be installed from npm:

    npm i -g constexpr.js@latest

Command line usage:

    $ constexpr.js --help
    usage: constexpr.js [-h] [-v] --input INPUT_DIRECTORY --output OUTPUT_DIRECTORY [--entry ENTRYPOINTS] [--skip-resources] [--jobcount JOBCOUNT] [--jobtimeout JOBTIMEOUT] [--depfile DEPFILE] [--noheadless] [--verbose]
    Zero cost abstractions for web development
    optional arguments:
      -h, --help show this help message and exit
      -v, --version show program's version number and exit
      --input INPUT_DIRECTORY Input website root directory
      --output OUTPUT_DIRECTORY Output directory
      --entry ENTRYPOINTS Add an HTML file to be used as entry point, paths must be relative to the website root, can be used multiple times, must provide at least one entry point
      --skip-resources Do not copy resources to the output directory
      --jobcount JOBCOUNT Number of compilation jobs to run in parallel
      --jobtimeout JOBTIMEOUT Time in milliseconds for which the compiler will wait for the pages to render
      --depfile DEPFILE A JSON object containing the command line arguments, file dependency, compilation results will be written to this path
      --noheadless Do not run chrome in headless mode, can be used for debugging using browser console
      --verbose Enable verbose logging


The tool also copies resources (css,  images  etcetra) that are requestead by pages being rendered (unless  --skip-resources  option is specified.

## Plugins

You can use any web development technology (and any number of technologies) to generate the HTML without any fear of bloat. For example this page uses prism.js for syntax highlighting, katex for math formulae, viz.js for graphs and asciinema-player for the  ./build.sh  output, along with jquery and papaparse. A total of 6mb of javascript that you don't have to download or execute because it's constexpr.  

## Performance

The compiler doesn't have any noticeable overhead. So the compilation time depends on how fast chrome can render all the pages in your website:

compilation_time≈average_rendering_time×total_number_of_pagesjob_countcompilation_time≈average_rendering_time×job_counttotal_number_of_pages​

So you can increase the job count using  --jobcount  parameters if you have a ton of cores. The sweet spot is around 2X the number of cores/threads.

However, compilation time shouldn't be an issue regardless of the size of your website. Because, as I mentioned above, the original website (the one you write) will look and work exactly the same as the generated website, so you will only have to run the compiler once per deployment.

On my 4 core / 4 thread 3.5 GHz machine, the amortized compilation time is around 100ms per page, and it should scale down linearly with the number of cores/threads/jobs. That puts its performance in the same ballpark as Jekyll.

If that doesn't work for you, you can use  --entry  option to compile a small number of pages in your website. See  [this guide](https://fctorial.com/posts/constexprjs_entry_points.html)  for more information.

There is also an incremental compilation feature in the pipeline. It should be out by the time the page count of this website hits 100 pages (currently at 38).

## Notes

### 1
You can mark tags other than  script  with  constexpr  as well. Add this code to your page to differentiate original page from the generated page:

    <style constexpr>
    body { border: 2px solid red; }
    </style>

This code will add a red border to your page which will only appear on the original website.

### 2
In the original webpage, you'll see a console error when the code tries to call the compilation trigger functions. Because those functions are injected by the compiler. You can add this snippet to fix that error:

    <script constexpr>
    if (!window._ConstexprJS_) {
    window._ConstexprJS_ = {
    compile: () => {},
    abort: () => {},
    addPath: () => {},
    addExclusion: () => {},
    addDependency: () => {},
    log: () => {}
    }
    }
    </script>

### 3
You can manage multiple rendering task in your page using promises:Promise.all([render_task_1(), render_task_2()]) .then(() => window._ConstexprJS_.compile())

### 4
You should keep all list data separate from the html in  [json files](https://github.com/fctorial/fctorial.github.io.src/tree/master/collections).  `constexpr` javascript should fetch these json files and render the page using them.  
    You can even use a real database if you're thinking about scalability. constexpr.js gives you a turing complete templating language, so you can do anything you want.

### 5
This whole website is rendered using javascript and constexpr.js. The html files contain only the page specific stuff. (article text and page specific styling). All of the styling and theming is done by constexpr code. The whole website contains 44 lines of javascript (for disqus and some optional dynamic functionality). The original sources for this website can be found  [here](https://github.com/fctorial/fctorial.github.io.src).

---


[constexpr.js](https://fctorial.com/posts/constexpr.js.html)  allows you to execute some of the javascript in your website before it is deployed. I'll refer to such javascript as  constepxr. You can use constexpr code for programmatically generating HTML in your website.

The constexpr code is stripped out by the compiler, so the runtime code must not depend on it. Hence, there has to be a clear boundary between the runtime code and compile time code. In this article I'll share some tips for managing code when building a site with constexpr.js.

> This article requires some familiarity with constexpr.js.  [Read this guide](https://fctorial.com/posts/constexprjs_hello_world.html)  to get up and running with constexpr.js.

## A simple example

Set up the environment as described in the above linked guide. After that, put this in  index.html:

    <html>
    <head>
    <title>Dynamic Pages Example</title>
    </head>
    <body>
    <p>This page was rendered on: <span id="timestamp"></span></p>
    </body>
    <script constexpr>
    let d = new Date()
    document.querySelector('#timestamp').textContent = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    window._ConstexprJS_.compile()
    </script>
    </html>

And run the compiler:

    constexpr.js --input=. --output=_out --entry=index.htm

The compiler will emit the following static website:

    <html>
    <head>
    <title>Dynamic Pages Example</title>
    </head>
    <body>
    <p>This page was rendered on: <span id="timestamp">1:58:5</span></p>
    </body>
    </html>

Let's add a button to this page that will add all the numbers in the timestamp and  alert  the result, just to demonstrate how to build non-static websites with constexpr.js. Let's first modify our rendering code to add a button to the page:

    <script constexpr>
    let d = new Date()
    document.querySelector('#timestamp').textContent = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let b = document.createElement('button')
    b.textContent = "Calculate"
    document.body.appendChild(b)
    window._ConstexprJS_.compile()
    </script>

After that, define a regular, non-constexpr function named  runtime_bootstrap  that will add an event listener to this button:

    <script>
    function runtime_bootstrap() {
    document.querySelector('button').addEventListener('click', () => {
    let result = 0
    document.querySelector('#timestamp').textContent.split(':').forEach(s => result += parseInt(s))
    alert(result)
    })
    }
    </script>

Finally we'll modify the rendering code to add a  script  tag to our page that calls the bootstrap function:

    <script constexpr>
    ...
    let s = document.createElement('script')
    s.textContent = 'runtime_bootstrap()'
    document.body.appendChild(s)
    window._ConstexprJS_.compile()
    </script>

Now when you run the compiler, you will get the following page as output:

    <html>
    <head>
    <title>Dynamic Pages Example</title>
    <script>
    function runtime_bootstrap() {
    document.querySelector('button').addEventListener('click', () => {
    let result = 0
    document.querySelector('#timestamp').textContent.split(':').forEach(s => result += parseInt(s)) alert(result)
    })
    }
    </script>
    </head>
    <body>
    <p>This page was rendered on: <span id="timestamp">2:32:13</span></p>
    <button>Calculate</button>
    <script>
    runtime_bootstrap()
    </script>
    </body>
    </html>

This page contains three things:

1.  Generated HTML (timestamp and button)
2.  Runtime bootstrap function
3.  A script tag that calls the bootstrap function

All the rendering code has been stripped out.

## Implementation in this website

The mobile view transitions in this site use javascript. If you're on desktop, you can test it by enabling mobile emulation in devtools (Top left in chrome and top right in firefox).

In this website, the rendering code generates all the site global theming (navbar, sidebars, syntax highlighting etc). I've put this code in  [/static/js/constexpr/renderer.js](https://github.com/fctorial/fctorial.github.io.src/blob/master/static/js/constexpr/renderer.js). This script is  [included as constexpr in every page](https://github.com/fctorial/fctorial.github.io.src/blob/master/devtools/_template.html).

The code that bootstraps the dynamic behavior is contained in a separate file,  [/static/js/dynamic.js](https://github.com/fctorial/fctorial.github.io.src/blob/master/static/js/dynamic.js). The constexpr code in  renderer.js  adds this script tag to every page once it has finished rendering:

    el = document.createElement('script')
    el.src = '/static/js/dynamic.js'
    document.body.appendChild(el)

[This page](https://fctorial.com/posts/intellij_logos.html)  also uses this technique. The rendering code generates the list of images at compile time and the bootstrap function  initHover  attaches  hover  event listeners to the images. You can find the source code of original page here  [here](https://github.com/fctorial/fctorial.github.io.src/blob/master/posts/intellij_logos.html).
