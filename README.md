# AngularRxJs
===================================================================================
var promise = new Promise((resolve, reject) => {
    <!-- do some business logic , maybe retrieve data and then ... -->
    if(/*we got some data!*/){
        resolve('It worked!')
    } else {
        eject(Error('Something wrong happened!'))
    }
})

promise.then(
    (result) => {
    console.log(result); // Output = It worked!
    }), 
    (error) => {
        console.log(error); // Output= Error: Something wrong happened!
    });
===================================================================================

var observable = Rx.Observable.create( (observer) => {
    observer.next('Hello');
    observer.next('There');
    observer.next('Welcome');
    observer.next('To');
    observer.next('Rxjs');
    observer.next('Concept');
    observer.next(1);
    observer.next(2);
    observer.next(3);
});

observable.subscribe( 
    (response) => {
        console.log(response);
    },
    (error) => {
        console.log(error);
    },
    (complete) => {
        console.log('This is the end!!! i.e Completed')
    }

)