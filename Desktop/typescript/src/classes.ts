export class AppError extends Error{
    public isOperational=true;
    constructor(public message:string, public statusCode:number){
        super(message);
        status:`${statusCode}`.startsWith('4')?'fail':'success';
        Error.captureStackTrace(this, this.constructor);
    }

    
}

