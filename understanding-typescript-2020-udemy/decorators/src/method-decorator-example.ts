enum LoggingLevel {
    INFO,
    WARN,
    DEBUG,
    TRACE
}

const loggingLevel = LoggingLevel.INFO;


function LogMethodExample(level: LoggingLevel):Function {
    return (
        // target unused
        _: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) => {

        const originalFunction:Function = descriptor.value;

        descriptor.value = function(...args:any[]) {
            if (level <= loggingLevel) {
                console.log(">> " + propertyKey + " " +  JSON.stringify(args));
            }
            originalFunction.apply(this,args);
        };


    }

}

class Database {

    name = 'CTCDB';

    @LogMethodExample(LoggingLevel.DEBUG)
    saveData(data:any) {
        console.log(`saving data in the database ${this.name} ${JSON.stringify(data)}`);
    }

}

const db = new Database();

//db.saveData({message: 'Hello World !!'});


// creating an Autobind decorator
// if you add it to any class method, the class context will always be bind to the method, no matter the call
// context
function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        // here we can intercept method call and add some magic
        get(): any {
            // this here will belong to the object in which we define the getter
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    // return the adjusted descriptor
    return adjDescriptor;
}
