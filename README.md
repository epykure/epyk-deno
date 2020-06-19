
![](https://raw.githubusercontent.com/epykure/epyk-deno/master/static/images/logo.ico)


# Epyk on Deno!

In this case the use of Epyk is a bit different. It will maintly help on the creation of rich templates to be render by the web server.
It is possible to have a multi level architecture with an application server in between in order to enrich the template before 
rendering string to the web server.

In this design the logic on the web server is done directly in a native language.

in this example the web server is Deno and we are using JavaScript to simply render the page.
There is no extra logic added to this example as the idea is to demonstrate the concept.


## Quickstart


## Repo Architecture

The project architecture is similar to the ones done for all the Epyk projects.

There are two main folders:
- reports: For the Epyk pages
- views: for the Epyk HTML artifacts

Few python scripts will be used to transpile the code and generate based on those Epyk pages the corresponding artifacts.

**Artifact are not supposed to changed directly**

<div align="center" >
    <img src="https://github.com/epykure/epyk-deno/blob/master/static/images/application_server.PNG?raw=true">
</div>

## Design Principle (web server + Application server)

Design principle are common to any Epyk projects except that in this design the web eerver will not be able to generate on 
the fly the artifact from the Python code.

The transpilation step is mandatory in this case

<div align="center" >
    <img src="https://github.com/epykure/epyk-deno/blob/master/static/images/server_archi_1.PNG?raw=true">
</div>


Transpilation will use the various Epyk components but it can also use specific components defined in the web server.
As it wiill be the one at the end in charge of rendering the page it can also add some extra pieces.

<div align="center" >
    <img src="https://github.com/epykure/epyk-deno/blob/master/static/images/server_archi_2.PNG?raw=true">
</div>

The application server in between will be still needed to enrich / update the report.

<div align="center" >
    <img src="https://github.com/epykure/epyk-deno/blob/master/static/images/server_archi_3.PNG?raw=true">
</div>


Benefits
================================


Do not hesitate to propose new examples !
