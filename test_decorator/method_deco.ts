import { stringify } from "querystring";

function HandleError() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("target", target);
        console.log("propertyKey", propertyKey);
        console.log("descriptor", descriptor);
        console.log(JSON.stringify(descriptor.value.toString()));
        
        const method = descriptor.value;

        descriptor.value = function(){
            try {
                method();
            } catch (error) {
                console.error(error);
            }
        }
    }
}

class Greeter {
    @HandleError()
    hello(){
        throw new Error('테스트 에러');
    }
}

const t = new Greeter();
t.hello();