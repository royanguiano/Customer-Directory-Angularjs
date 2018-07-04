/*

what are the tools that can be used?
the big picture?
module -> config -> routes: -> view and/or controller
scope binds views with controllers 
view -> custom directives
controller -> factory/service 
high level: 
    1. modules
        - containers
            - controllers
                - flow: scope -> controller -> factory/service
                - is the brain of a view
                - retrieve data from factory/ service
                - handle events triggered by views
                - handle custom logic
                - rely on scope object to interact with the view 
            - directives 
            - services/ factories 
                - RESTful calls
                - share data between controllers
                - handle logic
                - are singletons (1 instance only)
            - directives
            - filters 
        2. routes
            - path reference a controller and view 
            - can include path parameters
            - views
                - web page
                    - contain HTML and CSS
                    - UI -> directives, filters
                    - bind data provided by a controller via the $scope {}
                    
                    - scope (view logic/model )-> glues logic to UI

data binding overview?
    concept? data-oriented programming
    How it works? ng-model attribute
    How it works behind the scenes?
Directives and data binding expressions?
    - what can directives do? 
        - dom maniupulation
            * ng-hide
            * ng-repeat
            * ng-show
            * ng-view
            * ...
        - data binding
            * ng-bind
            * ng-init
            * ng-model
            * ng-cloak: hides elements where you are using      {{}}
            * ng-switch
                - <div ng-switch on="check ">
                    <h1 ng-switch-when="true"></h1>
                    <h1 ng-switch-default></h1>
                    </div>
            * ng-class
                
        - controllers/modules
            * ng-app
            * ng-controller
            * ...
        - view loading
        - css
        - events 
            * ng-click
            * ng-keypress
            * ng-mouseenter
            * ...
    - How can you use a directive?
        - depends on how it is defined and modelled?
        - can be used as html tags or attributes

How to iterate over data using ng-repeat?
    currency
    date
        examples: 
        - date: 'yyy,MM,dd', 
        - date: 'medium'
        - date: 'longDate'
    filter
    - filter data
    json
    limitTo
    - work with arrays
    lowercase
    number
    orderBy
    uppercase
    example: 
    <li ng-repeat="customer in customers | orderBy: 'name' "> 
        {{ customer.orderTotal | currency }} 
    </li>
    example 2: 
    <input type="text" ng-model="nameText.name" /> 
    <li ng-repeat="customer in customers | filter: nameText | orderBy: 'name' "> 
        {{ customer.name }} 
    </li>
    
Filters for sorting and formatting data?
Section: Views and directives
section: scope, controllers, modules
    Angular Architechture Patterns
        MVC or MV* or MVVM (model-view-view-data)
    controllers?
            - get data
            - store data for view to access
        architechture: 
            model <-> controller: request <-> scope <-> view: response
        role
            - define properties and methods
            - show/hide data in view 
            - handles events
            - get data
            - modify scope
        
      scope?
        - connects view and controller
        - store data 
        - you can inject into a controller
        - acts as data
        - binds to view 
    how hook up controller to view? 
        - with scope or routes
    
    Modules?
    - containers for
        1. controllers
        2. routes
        3. factories/services
        4. directives
        5. filters
    
    How Adding controller to module? 
    example: app.controller('myController', ['$scope',function(scope){
    
    }])
    
Routing section
    - history managment is taken care of by angular
    - 
    referencing the ngRoute module?
    configuring Routes?
    How do we use the ng-view Directive?
Factory and services?
    overview and why use them?
        -what? 
            1. singleton {} perform tasks
            2. crate and return custom {}
            3. you can inject factory into: 
                - controller
                - other factories/services
                - modules
        -why? reusable code
        - when? 
            1. re-usable code
            2. share state between controllers
        
    Role of factories? 
        - ajax calls
        - business rules
        - calculations
        - share data between controllers
    How do create a factory?
        - through a module. 
    How do we add factory to module?
    How does a factory work?
        - http
        - timeout
        - window
        - location
        - q asynchrones process
        - rootScope
            - new scopes
        - interval 
        - filter
        - log 
    
    service
    different technic on declaring variables?
    Ajax calls with factory and services?
        - http
            * http.head
            * http.get
            * http.post
            * http.put
            * http.delete
            * http.jsonp
            
    
constant and value section provider?
    - module.value(key, value)
    - Value example: app.value('version', '1.0')
    - cant be injected to config()
    
    Constant example: 
        app.constant('vesrion', '1.0')
    - can be injected into config file
    

animation with boostrap section? 
    http://augus.github.io/ngAnimate/
    https://daneden.github.io/animate.css/

    ng-animate module
        - comes with ng directives
        examples: 
        ngClass : add/remove 
        nghide/ngshow : add/remove
        nginclude : enter/leave
        ngrepeat : enter/leave/move
        ngswitch : enter/leave
        ngview : enter/leave 

        css animation: 
            1. transition
                - example: transition: 0.5s linear all;
                - timing function
            2. animations keyframes
                - example: animation: 0.5s keypress-animation;
            3. javascript animation
                - greensock
                - jquery animations

        steps to adding animation: 
            1. include src file
            2. add ngAnimate dependency to app module
            3. build css animations or transictions properties to css file
            4. add classes to directives like ng-repeat, ng-animation



How do you use them together?
How do you orgnaize them?*/